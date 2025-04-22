global.fetch = jest.fn(() =>
  Promise.resolve(
    new Response(JSON.stringify({ message: "fake fetch" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  )
);
