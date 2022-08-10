export const state = () => ({
  clients: [],
});

export const mutations = {
  addClient(state, client) {
    state.clients.push({
      ...client,
      email: "hamidreza.h@maticangroup.com",
      status: "New",
    });
  },
};
