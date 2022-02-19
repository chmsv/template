import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>This is a new routing (v.6)</div>} />
        <Route
          path='/test'
          element={<div>This is another new routing (v.6)</div>}
        />
        <Route
          path='/*'
          element={<div>What a path!</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Root
