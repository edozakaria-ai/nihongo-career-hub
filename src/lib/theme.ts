/** Konstanta tema dipisahkan dari komponen client agar bisa diimpor oleh Server Component (layout). */
export const THEME_STORAGE_KEY = "nch-theme";

/** Skrip inline di <head>: terapkan tema sebelum render pertama untuk mencegah kedipan. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;
