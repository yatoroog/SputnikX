import { create } from 'zustand';
<<<<<<< HEAD
import type { Satellite, SatellitePosition, AreaPass } from '@/types';
=======
import type { Satellite, SatellitePosition } from '@/types';
>>>>>>> 50af800 (feat: phase 0)

interface SatelliteStore {
  satellites: Satellite[];
  selectedSatellite: Satellite | null;
  positions: Map<string, SatellitePosition>;
  loading: boolean;
  error: string | null;
<<<<<<< HEAD

  clickedLocation: { lat: number; lng: number } | null;
  areaPasses: AreaPass[];
  areaPassesLoading: boolean;

=======
>>>>>>> 50af800 (feat: phase 0)
  setSatellites: (satellites: Satellite[]) => void;
  selectSatellite: (satellite: Satellite | null) => void;
  updatePositions: (positions: SatellitePosition[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
<<<<<<< HEAD

  setClickedLocation: (location: { lat: number; lng: number } | null) => void;
  setAreaPasses: (passes: AreaPass[]) => void;
  setAreaPassesLoading: (loading: boolean) => void;
=======
>>>>>>> 50af800 (feat: phase 0)
}

export const useSatelliteStore = create<SatelliteStore>()((set) => ({
  satellites: [],
  selectedSatellite: null,
  positions: new Map(),
  loading: false,
  error: null,

<<<<<<< HEAD
  clickedLocation: null,
  areaPasses: [],
  areaPassesLoading: false,

  setSatellites: (satellites: Satellite[]) => set({ satellites }),

  selectSatellite: (satellite: Satellite | null) =>
    set({ selectedSatellite: satellite, clickedLocation: null, areaPasses: [] }),
=======
  setSatellites: (satellites: Satellite[]) => set({ satellites }),

  selectSatellite: (satellite: Satellite | null) => set({ selectedSatellite: satellite }),
>>>>>>> 50af800 (feat: phase 0)

  updatePositions: (positions: SatellitePosition[]) =>
    set((state) => {
      const newPositions = new Map(state.positions);
      for (const pos of positions) {
        newPositions.set(pos.id, pos);
      }
      return { positions: newPositions };
    }),

  setLoading: (loading: boolean) => set({ loading }),

  setError: (error: string | null) => set({ error }),
<<<<<<< HEAD

  setClickedLocation: (location) =>
    set({ clickedLocation: location, selectedSatellite: null }),

  setAreaPasses: (passes) => set({ areaPasses: passes }),

  setAreaPassesLoading: (loading) => set({ areaPassesLoading: loading }),
=======
>>>>>>> 50af800 (feat: phase 0)
}));
