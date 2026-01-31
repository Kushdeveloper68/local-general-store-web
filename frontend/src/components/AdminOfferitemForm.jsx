import React, { useState } from 'react'
import { addOfferProductApi } from '../api/api'

function AdminOfferitemForm() {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    quantity: '',
    originalPrice: '',
    offerPrice: '',
    offerLabel: ''
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

  const calculateDiscount = () => {
    if (formData.originalPrice && formData.offerPrice) {
      const discount = ((formData.originalPrice - formData.offerPrice) / formData.originalPrice * 100).toFixed(0)
      return discount
    }
    return 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validation
    if (!formData.image.trim() || !formData.title.trim() || !formData.quantity.trim() || !formData.originalPrice || !formData.offerPrice || !formData.offerLabel.trim()) {
      setError('Please fill in all fields')
      return
    }

    if (!formData.image.startsWith('http')) {
      setError('Please enter a valid image URL')
      return
    }

    if (isNaN(formData.originalPrice) || parseFloat(formData.originalPrice) <= 0) {
      setError('Please enter a valid original price')
      return
    }

    if (isNaN(formData.offerPrice) || parseFloat(formData.offerPrice) <= 0) {
      setError('Please enter a valid offer price')
      return
    }

    if (parseFloat(formData.offerPrice) >= parseFloat(formData.originalPrice)) {
      setError('Offer price must be less than original price')
      return
    }

    setLoading(true)

    try {
      const response = await addOfferProductApi({
        image: formData.image,
        title: formData.title,
        quantity: formData.quantity,
        originalPrice: parseFloat(formData.originalPrice),
        offerPrice: parseFloat(formData.offerPrice),
        offerLabel: formData.offerLabel
      })

      if (response.newProduct || response.message === 'New offer product added successfully') {
        setSuccess('Offer added successfully!')
        setFormData({ image: '', title: '', quantity: '', originalPrice: '', offerPrice: '', offerLabel: '' })
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError(response.message || 'Failed to add offer')
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
              <span className="material-symbols-outlined text-primary-orange"
                >local_fire_department</span
              >
              Add Special Offer
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold">Product Name</label>
                      <input
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Fresh Strawberries"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold">Qty / Weight</label>
                      <input
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="500g"
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold">Original Price ($)</label>
                      <input
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="10.00"
                        type="number"
                        step="0.01"
                        name="originalPrice"
                        value={formData.originalPrice}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold">Offer Price ($)</label>
                      <input
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="7.50"
                        type="number"
                        step="0.01"
                        name="offerPrice"
                        value={formData.offerPrice}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Offer Label (e.g., "25% OFF")</label>
                    <input
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={`${calculateDiscount()}% OFF`}
                      type="text"
                      name="offerLabel"
                      value={formData.offerLabel}
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
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <span>Publish Offer</span>
                    )}
                  </button>
                </form>
              </div>
              <div
                className="relative flex items-center justify-center bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-10 overflow-hidden"
              >
                <div
                  className="absolute top-4 left-4 bg-white/80 dark:bg-slate-900/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 text-center"
                >
                  Live Preview
                </div>
                <div
                  className="w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden border-2 border-primary-orange"
                >
                  <div
                    className="h-48 bg-slate-200 relative bg-cover bg-center"
                    style={{
                      backgroundImage: formData.image ? `url('${formData.image}')` : "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYv1LtexOVfm8h9IWqk1BNIBP2SscAXUcd5Ncaihj6g2FW2A1gNgFjxMYQMq6NYFdmE7rXEG9KaDsP91S4MtUH5LvXCtOTqWoKtwOfU02iXJS3nYqJnk-HdE16PcyX6mvSY750Qr98we-x4LsX5UYjoiw0utsezoSJXL-n1jQk0YmfVX3TMrix6Pn6M83j-GCTHM2pROR469_PfmoH-LLZ7omxmnmboJyIL647pC6xIg-PYHowabe5gN86ytUIT0P9iRzEyQnn')"
                    }}
                  >
                    <div
                      className="absolute top-3 left-3 bg-primary-orange text-slate-900 px-2 py-1 rounded font-black text-sm shadow-md"
                    >
                      {formData.offerLabel || '% OFF'}
                    </div>
                    <div
                      className="absolute -top-1 -right-24 whitespace-nowrap text-xs text-primary-orange font-bold flex items-center gap-1 bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded shadow"
                    >
                      <span className="material-symbols-outlined text-sm"
                        >arrow_back</span
                      >
                      % Badge here
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <div
                      className="h-5 w-40 bg-slate-100 dark:bg-slate-800 rounded"
                    >
                      <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{formData.title || 'Product Name'}</span>
                    </div>
                    <div
                      className="h-4 w-12 bg-slate-50 dark:bg-slate-800/50 rounded"
                    >
                      <span className="text-xs text-slate-500">{formData.quantity || 'Qty'}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div
                        className="h-6 w-10 bg-slate-100 dark:bg-slate-800 rounded line-through opacity-50 flex items-center justify-center"
                      >
                        <span className="text-xs font-bold">${formData.originalPrice || '0.00'}</span>
                      </div>
                      <div className="h-6 w-14 bg-primary-orange/20 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">${formData.offerPrice || '0.00'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default AdminOfferitemForm