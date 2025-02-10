import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Token: "", // Store JWT token
  editorState: {
    fontSize: "16",
    isBold: true,
    isItalic: false,
    isUnderlined: false,
    alignment: 'left',
    textColor: '#000000',
    highlightColor: '#FFFF00',
    fontFamily: 'Arial',
    bulletList: false,
    image: null, 
  },
  resumeStateX: {
    about: "",
    Experience: ["", ""],
    skills: ["", ""],
    language: "",
    hobbies: "",
    references: "",
    education: "",
  },
  history: [],
};

const resumeEditorSlice = createSlice({
  name: 'resumeEditor',
  initialState,
  reducers: {
    // Save the current state and update the editorState
    saveState: (state, action) => {
      state.history.push(state.editorState); // Save the current editorState to history
      state.editorState = { ...action.payload }; // Update editorState with the new state
    },
    
    setresumeState: (state, action) => {
      state.resumeStateX = { ...action.payload };
    },
    
    loadState: (state) => {
      const previousState = state.history[state.history.length - 1];
      if (previousState) {
        state.editorState = { ...previousState }; // Load the last saved state
        state.history.pop(); // Remove the last state from history after loading
      }
    },
    
    // Set JWT token
    setToken: (state, action) => {
      state.Token = action.payload;
    },
    
    // Clear JWT token (logout)
    clearToken: (state) => {
      state.token = "";
    },
  },
});

// Export actions
export const { saveState, loadState, setresumeState, setToken, clearToken } = resumeEditorSlice.actions;

// Export the reducer
export default resumeEditorSlice.reducer;
