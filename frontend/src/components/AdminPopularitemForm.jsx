import React, { useState } from 'react'
import { addPopularProductApi } from '../api/api'

function AdminPopularitemForm() {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    price: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validation
    if (!formData.image.trim() || !formData.title.trim() || !formData.price) {
      setError('Please fill in all fields')
      return
    }

    if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      setError('Please enter a valid price')
      return
    }

    if (!formData.image.startsWith('http')) {
      setError('Please enter a valid image URL')
      return
    }

    setLoading(true)

    try {
      const response = await addPopularProductApi({
        image: formData.image,
        title: formData.title,
        price: parseFloat(formData.price)
      })

      if (response.newProduct || response.message === 'New popular product added successfully') {
        setSuccess('Product added successfully!')
        setFormData({ image: '', title: '', price: '' })
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError(response.message || 'Failed to add product')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error('Submit error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-orange">star</span>
              Add Popular Product
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-5"
              >
                {/* Error Message */}
                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">error</span>
                      <p className="text-red-700 dark:text-red-300 text-sm font-medium">{error}</p>
                    </div>
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                      <p className="text-green-700 dark:text-green-300 text-sm font-medium">{success}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Image URL</label>
                    <input
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="https://images.unsplash.com/photo..."
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Product Name</label>
                    <input
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="e.g. Organic Red Apples"
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Price ($)</label>
                    <input
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="4.99"
                      step="0.01"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-orange text-slate-900 py-3 rounded-lg font-black text-lg shadow-lg hover:shadow-primary-orange/20 transition-all mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">hourglass_top</span>
                        <span>Adding...</span>
                      </>
                    ) : (
                      <span>Add to Popular List</span>
                    )}
                  </button>
                </form>
              </div>
              <div
                className="relative flex items-center justify-center bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-10 overflow-hidden"
              >
                <div
                  className="absolute top-4 left-4 bg-white/80 dark:bg-slate-900/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500"
                >
                  Live Preview
                </div>
                <div
                  className="w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden group"
                >
                  <div
                    className="h-48 bg-slate-200 relative bg-cover bg-center"
                    style={{
                      backgroundImage: formData.image ? `url('${formData.image}')` : "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-AnBqyo6ywL5D2_e6b-GxFVz3qH0Pu0rfBd9Zcp8i9RLTjsZXRjVPDuaj46E3jZ2Afw_LkdUtXsgbGZc6BodKqv8Vehfv9omZo6LJ1rARUSq90x4lFPvuY7B2mUG2_jGRJ11evnjSSgBIdxu8tHcrZbThEgo_etiTAS3QxJlWtaraXVNgRLw9ftZ3j-YGH_oeoMMQkB3EYoRMEAlUQJFxVmXZ1F1kh4ZXdDCJUmDkwDjqPW0f_ceRBrYmzG6w1_lbDGJBid4B')"
                    }}
                  >
                    <div
                      className="absolute top-2 right-2 flex flex-col items-end gap-1"
                    >
                      <div
                        className="flex items-center gap-1 bg-white dark:bg-slate-800 px-2 py-1 rounded-md text-[10px] font-bold shadow-sm"
                      >
                        <span className="text-slate-400">{formData.image ? 'Image loaded' : 'Image goes here'}</span>
                        <span className="material-symbols-outlined text-xs"
                          >arrow_back</span
                        >
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-3 relative">
                    <div className="flex flex-col gap-1">
                      <div
                        className="h-5 w-32 bg-slate-100 dark:bg-slate-800 rounded relative"
                      >
                        <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{formData.title || 'Product Name'}</span>
                        <div
                          className="absolute -right-28 top-0 whitespace-nowrap text-xs text-primary-orange font-bold flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-sm"
                            >arrow_back</span
                          >
                          Name shows here
                        </div>
                      </div>
                      <div
                        className="h-3 w-16 bg-slate-50 dark:bg-slate-800/50 rounded"
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="h-6 w-12 bg-primary-orange/20 rounded relative flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">${formData.price || '0.00'}</span>
                        <div
                          className="absolute -right-24 top-0 whitespace-nowrap text-xs text-primary-orange font-bold flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-sm"
                            >arrow_back</span
                          >
                          Price here
                        </div>
                      </div>
                      <div
                        className="h-8 w-8 rounded-full bg-primary-orange flex items-center justify-center text-slate-900"
                      >
                        <span className="material-symbols-outlined text-sm"
                          >add</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default AdminPopularitemForm