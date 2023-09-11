import create from 'zustand'

const useAdviceStore = create((set) => ({
    id: null,
    advice: '',
    loading: false,
    error: null,
    fetchAdvice: async () => {
        set({ loading: true, error: null })
        try {
            const response = await fetch('https://ai.adviceslip.com/advice')
            const data = await response.json()
            set({ id: data.slip.id, advice: data.slip.advice })
        } catch (error) {
            set({ error: 'Error fetching advice' })
        } finally {
            set({ loading: false })
        }
    }
}))

export default useAdviceStore
