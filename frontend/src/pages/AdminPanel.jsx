import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {AdminNavbar, AdminPopularitemForm, AdminOfferitemForm} from "../components"
import { getPopularProductsApi, getOfferProductsApi, deletePopularProductApi, deleteOfferProductApi } from '../api/api'

function AdminPanel() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [popularProducts, setPopularProducts] = useState([])
  const [offerProducts, setOfferProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(null)
  const [error, setError] = useState('')
  const [deleteError, setDeleteError] = useState('')
  const [deleteSuccess, setDeleteSuccess] = useState('')

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('adminUser')
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (error) {
        console.error('Error parsing user data:', error)
        logout()
      }
    }
  }, [])

  // Fetch products when tab changes
  useEffect(() => {
    if (activeTab === 'popular') {
      fetchPopularProducts()
    } else if (activeTab === 'offers') {
      fetchOfferProducts()
    }
  }, [activeTab])

  const fetchPopularProducts = async () => {
    setLoadingProducts(true)
    setError('')
    try {
      const response = await getPopularProductsApi()
      if (response.popularProducts) {
        setPopularProducts(response.popularProducts)
      } else {
        setError('Failed to fetch popular products')
      }
    } catch (err) {
      setError('Error fetching popular products')
      console.error('Fetch error:', err)
    } finally {
      setLoadingProducts(false)
    }
  }

  const fetchOfferProducts = async () => {
    setLoadingProducts(true)
    setError('')
    try {
      const response = await getOfferProductsApi()
      if (response.offerProducts) {
        setOfferProducts(response.offerProducts)
      } else {
        setError('Failed to fetch offer products')
      }
    } catch (err) {
      setError('Error fetching offer products')
      console.error('Fetch error:', err)
    } finally {
      setLoadingProducts(false)
    }
  }

  const handleDeletePopularProduct = async (productId) => {
    setDeleteError('')
    setDeleteSuccess('')
    setDeleteLoading(productId)

    try {
      const response = await deletePopularProductApi(productId)
      if (response.message === 'Popular product deleted successfully') {
        setDeleteSuccess('Product deleted successfully!')
        setPopularProducts(popularProducts.filter(p => p._id !== productId))
        setTimeout(() => setDeleteSuccess(''), 2000)
      } else {
        setDeleteError(response.message || 'Failed to delete product')
      }
    } catch (err) {
      setDeleteError('Error deleting product')
      console.error('Delete error:', err)
    } finally {
      setDeleteLoading(null)
    }
  }

  const handleDeleteOfferProduct = async (offerId) => {
    setDeleteError('')
    setDeleteSuccess('')
    setDeleteLoading(offerId)

    try {
      const response = await deleteOfferProductApi(offerId)
      if (response.message === 'Offer product deleted successfully') {
        setDeleteSuccess('Offer deleted successfully!')
        setOfferProducts(offerProducts.filter(o => o._id !== offerId))
        setTimeout(() => setDeleteSuccess(''), 2000)
      } else {
        setDeleteError(response.message || 'Failed to delete offer')
      }
    } catch (err) {
      setDeleteError('Error deleting offer')
      console.error('Delete error:', err)
    } finally {
      setDeleteLoading(null)
    }
  }

  const logout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUser')
    navigate('/admin-login')
  }

  return (
    <div className="flex h-screen overflow-hidden">
    <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main
        className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark"
      >
        <header
          className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-8 py-4"
        >
          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-tight">
              Store Manager Dashboard
            </h2>
            <div className="flex items-center gap-2 mt-0.5">
              <div
                className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700"
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75"
                  ></span>
                  <span
                    className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange"
                  ></span>
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-slate-500"
                  >Server: Online</span
                >
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              
              
              <button
                className="bg-primary-orange text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-sm hover:opacity-90 transition-opacity"
              >
                View Live Store
              </button>
              <div
                className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1"
              ></div>
              {user && (
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Welcome back!</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white capitalize">{user.username}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 rounded-lg font-bold text-sm shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-sm inline-flex items-center">logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="p-8 max-w-6xl mx-auto flex flex-col gap-10">
          {/* Error and Success Messages */}
          {deleteError && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-500 mt-0.5">error</span>
                <p className="text-red-700 dark:text-red-300 font-medium">{deleteError}</p>
              </div>
            </div>
          )}

          {deleteSuccess && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                <p className="text-green-700 dark:text-green-300 font-medium">{deleteSuccess}</p>
              </div>
            </div>
          )}

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <>
              <div className="flex flex-col gap-2">
                <h3 className="text-4xl font-black tracking-tight">
                  Inventory Management
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Add new products or special offers to your customer-facing
                  website.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5"
                >
                  <div className="bg-primary-orange/20 text-slate-900 p-2 rounded-lg">
                    <span className="material-symbols-outlined">edit_note</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-base">Fill the Form</h4>
                    <p className="text-slate-500 text-sm">
                      Input the product details on the left side
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5"
                >
                  <div className="bg-primary-orange/20 text-slate-900 p-2 rounded-lg">
                    <span className="material-symbols-outlined">preview</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-base">Check Preview</h4>
                    <p className="text-slate-500 text-sm">
                      See how it looks on your site instantly
                    </p>
                  </div>
                </div>
              </div>
              
              <AdminPopularitemForm/>
              <AdminOfferitemForm/>
            </>
          )}

          {/* Popular Products Tab */}
          {activeTab === 'popular' && (
            <section className="mb-20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-orange">shopping_cart</span>
                  Popular Products
                </h3>
              </div>

              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-500">error</span>
                    <p className="text-red-700 dark:text-red-300">{error}</p>
                  </div>
                </div>
              )}

              {loadingProducts ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <span className="material-symbols-outlined text-4xl animate-spin text-primary-orange mb-2">hourglass_top</span>
                  <p className="text-slate-500">Loading products...</p>
                </div>
              ) : popularProducts.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center">
                  <span className="material-symbols-outlined text-4xl text-slate-400 mb-3 inline-block">inbox</span>
                  <p className="text-slate-500 dark:text-slate-400">No popular products added yet</p>
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Product</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {popularProducts.map((product) => (
                        <tr key={product._id}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-12 h-12 rounded bg-cover bg-center"
                                style={{
                                  backgroundImage: `url('${product.image}')`
                                }}
                              ></div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold line-clamp-1">{product.title}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-semibold">${product.price?.toFixed(2) || '0.00'}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-primary-orange"></div>
                              <span className="text-xs">Active</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleDeletePopularProduct(product._id)}
                              disabled={deleteLoading === product._id}
                              className="text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 px-3 py-2 rounded-lg transition-colors inline-flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <span className="material-symbols-outlined text-sm">
                                {deleteLoading === product._id ? 'hourglass_top' : 'delete'}
                              </span>
                              <span className="text-xs font-bold uppercase tracking-wide">
                                {deleteLoading === product._id ? 'Deleting' : 'Delete'}
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {/* Offers Tab */}
          {activeTab === 'offers' && (
            <section className="mb-20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-orange">local_fire_department</span>
                  Special Offers
                </h3>
              </div>

              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-500">error</span>
                    <p className="text-red-700 dark:text-red-300">{error}</p>
                  </div>
                </div>
              )}

              {loadingProducts ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <span className="material-symbols-outlined text-4xl animate-spin text-primary-orange mb-2">hourglass_top</span>
                  <p className="text-slate-500">Loading offers...</p>
                </div>
              ) : offerProducts.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center">
                  <span className="material-symbols-outlined text-4xl text-slate-400 mb-3 inline-block">inbox</span>
                  <p className="text-slate-500 dark:text-slate-400">No offers added yet</p>
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Product</th>
                        <th className="px-6 py-4">Original Price</th>
                        <th className="px-6 py-4">Offer Price</th>
                        <th className="px-6 py-4">Discount</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {offerProducts.map((offer) => (
                        <tr key={offer._id}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-12 h-12 rounded bg-cover bg-center"
                                style={{
                                  backgroundImage: `url('${offer.image}')`
                                }}
                              ></div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold line-clamp-1">{offer.title}</span>
                                <span className="text-xs text-slate-500">{offer.quantity}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-semibold line-through opacity-50">${offer.originalPrice?.toFixed(2) || '0.00'}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-bold text-primary-orange">${offer.offerPrice?.toFixed(2) || '0.00'}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center rounded-full bg-primary-orange/20 text-slate-900 dark:text-primary-orange px-2 py-1 text-xs font-bold">
                              {offer.offerLabel}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1.5">
                              <div className="h-2 w-2 rounded-full bg-primary-orange"></div>
                              <span className="text-xs">Active</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleDeleteOfferProduct(offer._id)}
                              disabled={deleteLoading === offer._id}
                              className="text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 px-3 py-2 rounded-lg transition-colors inline-flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <span className="material-symbols-outlined text-sm">
                                {deleteLoading === offer._id ? 'hourglass_top' : 'delete'}
                              </span>
                              <span className="text-xs font-bold uppercase tracking-wide">
                                {deleteLoading === offer._id ? 'Deleting' : 'Delete'}
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  )
}

export default AdminPanel