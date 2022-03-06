import { createSlice } from '@reduxjs/toolkit';
import { SETTING_KEY } from '@/constants/emun';
import { defaultThemeSetting } from '@/constants/setting';
import type { MenuTheme } from 'antd/lib/menu/MenuContext';
export interface AppState {
  settings: {
    headerTheme?: MenuTheme;
    navTheme?: MenuTheme;
    title: string;
  };
}

const cache = JSON.parse(localStorage.getItem(SETTING_KEY) || '{}');

const initialState: AppState = {
  settings: {
    ...defaultThemeSetting,
    ...cache
  }
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateSetting: (state, action) => {
      console.log(action);
      state.settings = action.payload;
    }
  }
});
export const { updateSetting } = appSlice.actions;

export default appSlice.reducer;
