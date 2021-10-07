const toastColor = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const toastDark = { ...toastColor, theme: 'dark' };

const toastWhite = { ...toastColor, theme: 'light' };

export { toastColor, toastDark, toastWhite };
