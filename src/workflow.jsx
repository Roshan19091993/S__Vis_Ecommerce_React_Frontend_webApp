          ┌─────────────────────────┐
          │      User Login Form     │
          └─────────────┬───────────┘
                        │
                        ▼
          ┌─────────────────────────┐
          │  Submit email + password │
          └─────────────┬───────────┘
                        │
                        ▼
          ┌─────────────────────────┐
          │ Fetch user from JSON DB │
          │ GET /users?email=...   │
          └─────────────┬───────────┘
                        │
         ┌──────────────┴──────────────┐
         │                             │
         ▼                             ▼
 ┌─────────────────┐             ┌─────────────────┐
 │   User Found?   │ No          │   User Found?   │ Yes
 └─────────┬───────┘             └─────────┬───────┘
           │                                │
           ▼                                ▼
 ┌─────────────────────┐          ┌─────────────────────────┐
 │ Show error:         │          │ Merge guest cart (from  │
 │ Invalid email/pass  │          │ localStorage) with      │
 │                     │          │ user.cart               │
 └─────────────────────┘          └─────────────┬───────────┘
                                            │
                                            ▼
                                 ┌─────────────────────────┐
                                 │ Update JSON Server:     │
                                 │ PUT /users/:id with     │
                                 │ merged cart & data      │
                                 └─────────────┬───────────┘
                                            │
                                            ▼
                                 ┌─────────────────────────┐
                                 │ Save user to localStorage│
                                 └─────────────┬───────────┘
                                            │
                                            ▼
                                 ┌─────────────────────────┐
                                 │ Update Redux Cart State │
                                 │ dispatch(setCartFromBackend) │
                                 └─────────────┬───────────┘
                                            │
                                            ▼
                                 ┌─────────────────────────┐
                                 │ Optional Redirect / UI  │
                                 │ update                  │
                                 └─────────────────────────┘
