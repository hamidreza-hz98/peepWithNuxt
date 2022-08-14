//I know, that's better to break "mutations", "getters" and "actions" into
//separate files :)

export const state = () => ({
  clients: [],
});

export const mutations = {
  //The email and status are set statically
  addClient(state, client) {
    state.clients.push({
      ...client,
      email: "hamidreza.h@maticangroup.com",
      status: "New",
      name: client.firstName + " " + client.lastName,
      dateOfBirth: client.birthDay + " " + client.birthMonth + client.birthYear,
    });
  },

  updateClient(state, client) {
    const updatedClient = {
      ...client,
      email: "hamidreza.h@maticangroup.com",
      status: "New",
      name: client.firstName + " " + client.lastName,
      dateOfBirth: client.birthDay + " " + client.birthMonth + client.birthYear,
    };
    const index = state.clients.findIndex(
      (c) => c.mobile === updatedClient.mobile
    );
    if (index != -1) {
      state.clients.splice(index, 1, updatedClient);
    }
    console.log(state.clients);
  },
};

export const getters = {
  //I set the route and Id, same with the phone number,
  //This waris-like shit strategy prevents the user from changing client's phone number
  getClientByPhoneNumber: (state) => (mobile) => {
    return state.clients.find((client) => {
      if (client.mobile === mobile) return client;
    });
  },
};
