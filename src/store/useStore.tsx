import { create } from "zustand";
interface StoreState {
  TypeOfCharge: string;
  TypeOfSimcard: string;
  email: string;
  PhoneNumber: any;
  PriceOfCharge: number;
  PriceError: boolean;
  phoneError: boolean;
  setTypeOfCharge: (newCharge: string) => void;
  setTypeOfSimcard: (newSimcard: string) => void;
  setemail: (newEmail: string) => void;
  setPriceOfCharge: (newPrice: number) => void;
  setPhoneNumber: (newPrice: number) => void;
  setPriceError: (newPrice: boolean) => void;
  setphoneError: (newPrice: boolean) => void;
}
export const useStore = create<StoreState>((set) => ({
  TypeOfCharge: "معمولی",
  TypeOfSimcard: "اعتباری",
  PriceError: false,
  phoneError: false,

  email: "",
  PhoneNumber: null,
  PriceOfCharge: 20000,
  setTypeOfCharge: (newBear: string) => set({ TypeOfCharge: newBear }),
  setTypeOfSimcard: (newBear: string) => set({ TypeOfSimcard: newBear }),
  setemail: (newBear: string) => set({ email: newBear }),
  setPhoneNumber: (newBear: number) => set({ PhoneNumber: newBear }),
  setPriceError: (newBear: boolean) => set({ PriceError: newBear }),
  setphoneError: (newBear: boolean) => set({ phoneError: newBear }),
  setPriceOfCharge: (newBear: number) =>
    set((state) => ({
      PriceOfCharge:
        state.TypeOfSimcard === "اعتباری" ? Math.round(newBear * 1.1) : newBear,
    })),
}));
