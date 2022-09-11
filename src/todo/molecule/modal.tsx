import * as React from 'react';
import { SetterOrUpdater } from 'recoil';
import { Dialog } from '@headlessui/react'

interface ModalProps {
  isOpen: boolean;
  setIsOpen: SetterOrUpdater<boolean>;
}

export const Modal = ({isOpen, setIsOpen}:ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
