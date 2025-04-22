global.fetch = jest.fn(() =>
  Promise.resolve(
    new Response(JSON.stringify({ message: "hello world" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  )
);
