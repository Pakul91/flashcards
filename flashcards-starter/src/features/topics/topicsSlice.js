import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    //Add new topic to topics state slice
    addTopic: (state, action) => {
      const topicId = action.payload.id;
      state.topics[topicId] = { ...action.payload, quizIds: [] };
    },
    //Add quiz id to topics quizIds array if match.
    addQuizId: (state, action) => {
      const { topicId, quizId } = action.payload;

      for (const topic in state.topics) {
        if (topic === topicId) {
          state.topics[topic].quizIds.push(quizId);
        }
      }
    }
  }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
