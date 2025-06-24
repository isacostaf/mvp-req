"use client"

import { cn } from "@/lib/utils"

interface SeatMapProps {
  totalSeats: number
  occupiedSeats: number[]
}

export function SeatMap({ totalSeats, occupiedSeats }: SeatMapProps) {
  // Determine grid layout based on total seats
  const columns = totalSeats <= 20 ? 5 : 8

  return (
    <div className="flex flex-col items-center">
      <div
        className={`grid gap-2 mb-4`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: totalSeats }).map((_, index) => {
          const seatNumber = index + 1
          const isOccupied = occupiedSeats.includes(seatNumber)

          return (
            <div
              key={seatNumber}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium transition-all transform hover:scale-105",
                isOccupied
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md"
                  : "bg-gray-50 hover:bg-gray-100 border-gray-200",
              )}
            >
              {seatNumber}
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-center space-x-4 text-sm">
        <div className="flex items-center">
          <div className="mr-2 h-4 w-4 rounded-sm border bg-gray-50"></div>
          <span>Disponível</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 h-4 w-4 rounded-sm bg-gradient-to-br from-blue-500 to-blue-600"></div>
          <span>Ocupado</span>
        </div>
      </div>
    </div>
  )
}
