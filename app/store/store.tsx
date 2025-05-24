import {create} from 'zustand'

interface StoreState {
    cart: String[]
    count: number
    increase: () => void
    decrease: () => void
    addToCart: (item: String) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
  }

const useStore = create((set) => ({

    //state values
    cart: [],
    count: 0,


    // actions
    increase: () => set((state: any) => ({ count: state.count + 1})),

    decrease: () => set((state: any) => ({ count: state.count - 1})),

    addToCart: (item: any) => set((state: any) => {
        const existingItem = state.cart.find((cartItem: any) => cartItem.id === item.id);
        if (existingItem) {
            return {
                cart: state.cart.map((cartItem: any) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            };
        } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }
    }),

    removeFromCart: (itemId: any) => set((state: any) => ({
        cart: state.cart.filter((item: any) => item.id !== itemId),
        decrease: state.count > 0 ? state.count - 1 : 0
    })),

    clearCart: () => set(() => ({ cart: [] })),

    decreaseQuantity: (itemId: number) =>
        set((state: any) => {
          const item = state.cart.find((i: any) => i.id === itemId)
          if (!item) return {}
      
          if (item.quantity && item.quantity > 1) {
            return {
              cart: state.cart.map((i: any) =>
                i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
              ),
              count: state.count - 1
            }
          } else {
            return {
              cart: state.cart.filter((i: any) => i.id !== itemId),
              count: state.count - 1
            }
          }
        })

}));



export default useStore;