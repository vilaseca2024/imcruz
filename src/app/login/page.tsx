"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "@/lib/validations/auth";
import { Loader2, Lock, Mail, Truck, Car, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Datos enviados:", data);
    router.push("/");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/fondo_login.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
      </div>

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8">
          
          {/* HEADER / LOGO SECTION */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4 shadow-lg">
              <Truck size={32} />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              IM<span className="text-blue-600">CRUZ</span> Logística
            </h1>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              Gestión Aduanera de Vehículos y Chasis
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* EMAIL FIELD */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider ml-1">
                Correo Institucional
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  {...register("email")}
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl outline-none transition-all duration-200 focus:bg-white ${
                    errors.email 
                      ? "border-red-500 ring-2 ring-red-100" 
                      : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  }`}
                  placeholder="usuario@imcruz.com"
                />
              </div>
              {errors.email && <p className="text-xs text-red-500 font-medium ml-1">{errors.email.message}</p>}
            </div>

            {/* PASSWORD FIELD */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider ml-1">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  {...register("password")}
                  type="password"
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl outline-none transition-all duration-200 focus:bg-white ${
                    errors.password 
                      ? "border-red-500 ring-2 ring-red-100" 
                      : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  }`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="text-xs text-red-500 font-medium ml-1">{errors.password.message}</p>}
            </div>

            {/* EXTRA INFO */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                Recordarme
              </label>
              <a href="#" className="text-blue-600 hover:underline font-medium">¿Olvidaste tu clave?</a>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Autenticando...</span>
                </>
              ) : (
                <>
                  <ShieldCheck size={20} />
                  <span>Ingresar al Sistema</span>
                </>
              )}
            </button>
          </form>
        </div>
        
        <p className="text-center text-white/50 text-xs mt-6">
          © 2026 IMCruz Bolivia - Sistema de Clientes Vilaseca
        </p>
      </div>
    </div>
  );
}