"use client"

import { Header, ProductCard } from "@/components"
import { PRODUCTS } from "@/data/constant"
import { useState } from "react"

export default function Products() {

  const [searchValue, setSearchValue] = useState("")

  const searchForProduct = (product) => {
    return (
      product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.collection.toLowerCase().includes(searchValue.toLowerCase())
    )
  }

  return (
    <main className="main">
      <Header />
      <div className="flex justify-center gap-4 flex-wrap py-32 px-4 md:px-0 max-width">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {PRODUCTS.map(product => {
          if (!searchValue)
            return <ProductCard key={product.id} product={product} />
          else if (searchForProduct(product))
            return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </main>
  )

}

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="max-width p-4">
      <div className="flex justify-end">
        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg bg-dark p-5">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-light transition">
            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for product..."
          className="w-full max-w-[300px] bg-light pl-4 text-base font-semibold outline-0"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <input
          type="button"
          value="Search"
          className="bg-dark text-light hover:opacity-50 p-2 rounded-r-lg cursor-pointer duration-300"
        />
      </div>
    </div>
  )
}