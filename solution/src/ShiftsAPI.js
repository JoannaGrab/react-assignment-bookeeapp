export const ShiftsAPI = {
  getShifts() {
    // GET / shifts
    return [
      {
        id: "f5ce294f-0a18-428e-9ddc-a387848bf07d",
        booked: true,
        area: "Oca",
        startTime: 1659693700002,
        endTime: 1656993788804,
      },
      {
        id: "fee73c52-2361-47bb-b8b1-dfaa33124e18",
        booked: false,
        area: "Oslo",
        startTime: 1656496800000,
        endTime: 1656504000000,
      },
      {
        id: "e57b19e1-8803-4466-be36-ac66f28268fa",
        booked: true,
        area: "Helsinki",
        startTime: 1658489600000,
        endTime: 1658496800000,
      },
      {
        id: "ab9844a6-ec7e-4b28-914b-5a6dda136e69",
        booked: true,
        area: "Tampere",
        startTime: 1656939600000,
        endTime: 1656950400000,
      },
      {
        id: "c6624e8a-9dad-4332-af37-39be7b4d91ef",
        booked: true,
        area: "Tampere",
        startTime: 1656946800000,
        endTime: 1656957600000,
      },
      {
        id: "c057455d-cadc-43d7-a035-11a6e14e4610",
        booked: false,
        area: "Helsinki",
        startTime: 1658849600000,
        endTime: 1658858600000,
      },
      {
        id: "f5ce294f-0af8-428e-9ddc-a387848bf07d",
        booked: true,
        area: "Tampere",
        startTime: 1658835200000,
        endTime: 1658842400000,
      },
    ];
  },

  cancel(id) {
    // POST /shifts/{id}/cancel
    // const res = this.getShifts().filter((s) => s.id !== id);
    console.log(`cancel: `, id);
  },

  book(id) {
    // POST /shifts/{id}/book
    console.log("booked", id);
  },
};
