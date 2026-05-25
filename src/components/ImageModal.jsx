import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ImageModal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="modal-shell" initial={{ scale: 0.94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 20 }} onClick={(e) => e.stopPropagation()}>
            <button className="icon-button absolute right-4 top-4 z-10" onClick={onClose} aria-label="Close image preview"><X /></button>
            <img src={item.image} alt={item.title} className="max-h-[82vh] w-full rounded object-contain" loading="lazy" />
            <div className="mt-4">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              {item.category && <p className="text-sm text-slate-400">{item.category}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
