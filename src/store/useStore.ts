
import { create } from 'zustand';

type CardType = 'ministries' | 'events' | 'sermon';
type EventCategory = 'all' | 'worship' | 'youth' | 'outreach' | 'bible-study';

interface StoreState {
  // Navigation
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  // Modal states
  isGiveModalOpen: boolean;
  openGiveModal: () => void;
  closeGiveModal: () => void;

  // Interactive cards
  activeCard: CardType | null;
  setActiveCard: (card: CardType | null) => void;

  // Events filtering
  eventCategory: EventCategory;
  setEventCategory: (category: EventCategory) => void;
}

const useStore = create<StoreState>((set) => ({
  // Navigation
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  // Modal states
  isGiveModalOpen: false,
  openGiveModal: () => set({ isGiveModalOpen: true }),
  closeGiveModal: () => set({ isGiveModalOpen: false }),

  // Interactive cards
  activeCard: null,
  setActiveCard: (card) => set({ activeCard: card }),

  // Events filtering
  eventCategory: 'all',
  setEventCategory: (category) => set({ eventCategory: category }),
}));

export default useStore;
