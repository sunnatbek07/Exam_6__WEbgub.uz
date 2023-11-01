import { create } from 'zustand';

const useCourseStore = create((set) => ({
    courses: [],
    isLoad: true,
    // setCourse: (data) => set((state) => ({ courses: data })),
    setCourse: (data) =>
        set((state) => ({ courses: [...state.courses, data] })),
        
    setLoader: () => set(() => ({ isLoad: true }))
}));

export default useCourseStore;
