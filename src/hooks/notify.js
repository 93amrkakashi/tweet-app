import { toast } from "react-toastify";

const position = "top-center",
  autoClose = 3000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = undefined,
  theme = "dark";

export const notifygood = () =>
  toast.success("🦄 You are loged in!", {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });

export const notifycreat = () =>
  toast.success("🦄 You craeted an account!", {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });


  export const notifycomment = () =>
  toast.success("🦄 You craeted a comment!", {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });

  export const notifyupload = () =>
  toast.success("🦄 Uploaded!", {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });
  export const notifynofile = () =>
  toast.error("🦄 No file selected!", {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });

export const notifybad = () =>
  toast.error("🦄 Failed to login!", {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });

export const notifynotcreat = () =>
  toast.error("🦄 Failed to creat account !", {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });

export const notifydelete = () =>
  toast.error("🦄 Deleted !", {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });

export const notifymessage = () =>
  toast.info(" Hope to see you again!", {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });

export const notifpost = () =>
  toast.success("🦄 You craeted a post!", {
    position: "top-center",
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });
