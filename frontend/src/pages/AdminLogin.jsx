import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../api/api'

function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      const response = await loginApi(username, password)

      if (response.success !== false && response.token) {
        setSuccess('Login successful! Redirecting to dashboard...')
        // Store token in localStorage
        localStorage.setItem('adminToken', response.token)
        localStorage.setItem('adminUser', JSON.stringify(response.user))
        
        // Redirect to admin panel after 1.5 seconds
        setTimeout(() => {
          navigate('/admin-panel')
        }, 1500)
      } else {
        setError(response.message || 'Login failed. Please check your credentials.')
      }
    } catch (err) {
      setError('An error occurred. Please try again later.')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
   <>
     <header
    className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-primary-orange/20 rounded-lg">
        <span className="material-symbols-outlined text-zinc-900 dark:text-zinc-100">storefront</span>
      </div>
      <h2 className="text-zinc-900 dark:text-zinc-100 text-lg font-bold tracking-tight">LK Mart Admin Portal</h2>
    </div>
  
  </header>
  {/* <!-- Main Content Area --> */}
  <main className="flex-1 flex flex-col items-center justify-center p-6">
    {/* <!-- Login Card Container --> */}
    <div
      className="w-full max-w-[420px] bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800">
      {/* <!-- Branding/Heading --> */}
      <div className="text-center mb-8">
        <h1 className="text-zinc-900 dark:text-zinc-100 text-3xl font-extrabold tracking-tight mb-2">Welcome Back</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">Please log in to manage your inventory and orders.</p>
      </div>
      {/* <!-- Error Message --> */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-red-500 dark:text-red-400 mt-0.5">error</span>
            <p className="text-red-700 dark:text-red-300 text-sm font-medium">{error}</p>
          </div>
        </div>
      )}

      {/* <!-- Success Message --> */}
      {success && (
        <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-500 dark:text-green-400 mt-0.5">check_circle</span>
            <p className="text-green-700 dark:text-green-300 text-sm font-medium">{success}</p>
          </div>
        </div>
      )}

      {/* <!-- Login Form --> */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* <!-- Username Field --> */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Username</label>
          <div className="relative group">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary-orange transition-colors">person</span>
            <input
              className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all dark:text-white placeholder:text-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Enter your username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />
          </div>
        </div>
        {/* <!-- Password Field --> */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Password</label>
            
          </div>
          <div className="relative group">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary-orange transition-colors">lock</span>
            <input
              className="w-full pl-10 pr-12 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all dark:text-white placeholder:text-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
           
          </div>
        </div>
        {/* <!-- Login Button --> */}
        <div className="pt-4">
          <button
            className="w-full bg-primary-orange text-zinc-900 py-4 rounded-lg font-bold text-lg hover:brightness-105 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:brightness-100"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin">hourglass_top</span>
                <span>Logging in...</span>
              </>
            ) : (
              <>
                <span>Login to Dashboard</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </>
            )}
          </button>
        </div>
      </form>
      {/* <!-- Secondary Footer Info --> */}
      <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-center">
        <p
          className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center justify-center gap-1 uppercase tracking-tighter">
          <span className="material-symbols-outlined text-[14px]">security</span>
          Secure Administrator Environment
        </p>
      </div>
    </div>
    {/* <!-- System Requirements / Info --> */}
    <div className="mt-12 flex flex-wrap justify-center gap-8 text-zinc-400 dark:text-zinc-600">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">cloud_done</span>
        <span className="text-sm">Auto-Sync Enabled</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">encrypted</span>
        <span className="text-sm">End-to-End Encryption</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">history</span>
        <span className="text-sm">Activity Log Active</span>
      </div>
    </div>
  </main>
  {/* <!-- Decorative Elements (Abstract Patterns) --> */}
  <div className="fixed bottom-0 left-0 p-8 opacity-20 pointer-events-none select-none">
    <div className="w-32 h-32 rounded-full bg-primary-orange/40 blur-3xl"></div>
  </div>
  <div className="fixed top-20 right-0 p-8 opacity-10 pointer-events-none select-none">
    <div className="w-64 h-64 rounded-full bg-primary-orange/30 blur-[100px]"></div>
  </div>
   </>
  )
}

export default AdminLogin