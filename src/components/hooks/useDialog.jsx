import { useEffect, forwardRef, useState } from "react";


export default function useDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document
      .getElementById(window.location.hash)
      ?.scrollIntoView({ behavior: "smooth" });
  }, [open]);

  return {
    open,
    handleClickOpen,
    handleClose,
  };
}
