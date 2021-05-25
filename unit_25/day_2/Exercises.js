db.clients.aggregate(
  [
    { 
      $lookup: { 
        from: "transactions",
        let: ,
        pipeline: ,
        as: "historic",
      }
    }
  ]
).pretty();