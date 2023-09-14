import { create } from 'zustand'

const useAdviceStore = create((set) => ({
    id: null,
    advice: '',
    loading: false,
    error: null,
    clearAdvice: () => set({ id: null, advice: '', loading: false, error: null }),
    fetchAdvice: async () => {
        console.log(5)
        set({ loading: true, error: null })
        try {
            const response = await fetch('https://api.adviceslip.com/advice')
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`)
            }
            const data = await response.json()
            const { id, advice } = data.slip
            set({ id, advice, loading: false })
            console.log(15)
        } catch (error) {
            console.error(error)
            set({ loading: false, error: 'Error fetching advice' })
        }
    }
}))

export default useAdviceStore
