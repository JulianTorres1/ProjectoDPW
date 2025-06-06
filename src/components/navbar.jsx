import React, { useState } from "react";
import { Search, Menu, X, Bell, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    { name: "Noticias", href: "/noticias" },
    { name: "Calendario", href: "/calendario" },
    { name: "Campeonatos", href: "/campeonatos" },
    { name: "Soccer", href: "/soccer" },
    { name: "Tennis", href: "/tennis" },
    { name: "More Sports", href: "/more-sports" },
  ];

  return (
    <header className="bg-slate-800 text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">F</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Futbol Cartagenero</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-red-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search sports news..."
                className="w-full bg-slate-700 text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                autoFocus
              />
              <Search className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 px-4 hover:bg-slate-700 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
