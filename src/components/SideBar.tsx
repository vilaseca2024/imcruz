"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, BarChart3, Settings, LogOut } from 'lucide-react';
import { clsx } from 'clsx'; // para manejar clases condicionales

const menuItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Licitaciones (DIM/DAM)', href: '/licitaciones', icon: FileText },
  { name: 'Reportes Contables', href: '/reportes', icon: BarChart3 },
  { name: 'Configuración', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col">
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-bold text-blue-400">IMCruz <span className="text-white">Docs</span></h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.icon; // Simplificado para el ejemplo
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 p-3 rounded-lg transition-colors",
                pathname === item.href ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-slate-800 pt-4">
        <button className="flex items-center gap-3 p-3 w-full text-slate-400 hover:text-red-400 transition-colors">
          <LogOut size={20} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}