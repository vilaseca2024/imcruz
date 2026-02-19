import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/SideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema de Licitaciones IMCruz",
  description: "Gestión de documentos aduaneros y contabilidad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100`}>
        {/* Usamos un contenedor flexible */}
        <div className="flex">
          {/* Solo mostramos el sidebar si no estamos en login (lógica simple por ahora) */}
          <Sidebar />
          <main className="flex-1 h-screen overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}