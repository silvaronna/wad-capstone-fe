// Variabel module — hanya bisa diakses dalam file ini
let _accessToken = null;
export const TokenStore = {
  // Access Token — disimpan di memory (variabel JavaScript)
  getAccessToken: () => _accessToken,
  setAccessToken: (token) => {
    _accessToken = token;
  },
  // Refresh Token — disimpan di sessionStorage
  // (lebih aman dari localStorage karena reset saat tab ditutup)
  getRefreshToken: () => sessionStorage.getItem("rf_token"),
  setRefreshToken: (token) => sessionStorage.setItem("rf_token", token),
  // Hapus semua token (saat logout)
  clear: () => {
    _accessToken = null;
    sessionStorage.removeItem("rf_token");
  },
  isLoggedIn: () => {
    const token = sessionStorage.getItem("rf_token");
    return !!token && token !== "undefined" && token !== "null";
  },
};
