export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="px-4 text-center text-gray-50 text-sm">
        &copy; {new Date().getFullYear()} Ope Portfolio. All rights reserved.
        <p className="mt-2">Designed and Developed by Ope</p>
      </div>
    </footer>
  );
}
