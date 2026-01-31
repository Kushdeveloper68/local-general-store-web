import React from 'react'

function AdminNavbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'popular', label: 'Popular Products', icon: 'shopping_cart' },
    { id: 'offers', label: 'Special Offers', icon: 'local_fire_department' }
  ]

  return (
      <aside
        className="w-72 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/50 flex flex-col"
      >
        <div className="p-6 flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-3">
            <div className="bg-primary-orange/20 p-2 rounded-lg text-primary-orange">
              <span className="material-symbols-outlined text-3xl font-bold"
                >storefront</span
              >
            </div>
            <div className="flex flex-col">
              <h1
                className="text-slate-900 dark:text-white text-base font-bold leading-none"
              >
                LK Mart Admin
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                Grocery Store Manager
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold shadow-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-orange text-slate-900'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
      </aside>
  )
}

export default AdminNavbar