import SideNav from '@/app/ui/dashboard/sidenav';
export const experimental_ppr = true; //Next.js将预渲染路径的静态部分，并推迟动态部分，直到用户请求它们。
//只要你使用Suspense来包装路线的动态部分，Next.js就会知道路线的哪些部分是静态的，哪些部分是动态的。

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
