// Dados de exemplo para demonstração

interface Student {
  id: string
  name: string
  phone: string
  credits: {
    available: number
    used: number
  }
  isFirstClass: boolean
  seatNumber: number
}

interface Class {
  id: string
  name: string
  type: "bike" | "yoga"
  date: string
  time: string
  instructor: string
  totalSeats: number
  students: Student[]
}

// Dados de exemplo
const classes: Class[] = [
  {
    id: "1",
    name: "Bike Intenso",
    type: "bike",
    date: "17/04/2025",
    time: "07:00",
    instructor: "João Silva",
    totalSeats: 20,
    students: [
      {
        id: "s1",
        name: "Ana Oliveira",
        phone: "(11) 98765-4321",
        credits: { available: 8, used: 12 },
        isFirstClass: false,
        seatNumber: 5,
      },
      {
        id: "s2",
        name: "Carlos Santos",
        phone: "(11) 91234-5678",
        credits: { available: 3, used: 7 },
        isFirstClass: true,
        seatNumber: 8,
      },
      {
        id: "s3",
        name: "Mariana Costa",
        phone: "(11) 99876-5432",
        credits: { available: 15, used: 5 },
        isFirstClass: false,
        seatNumber: 12,
      },
    ],
  },
  {
    id: "2",
    name: "Ioga para Iniciantes",
    type: "yoga",
    date: "17/04/2025",
    time: "09:00",
    instructor: "Maria Oliveira",
    totalSeats: 15,
    students: [
      {
        id: "s4",
        name: "Pedro Almeida",
        phone: "(11) 97654-3210",
        credits: { available: 5, used: 5 },
        isFirstClass: false,
        seatNumber: 3,
      },
      {
        id: "s5",
        name: "Juliana Lima",
        phone: "(11) 98765-1234",
        credits: { available: 2, used: 8 },
        isFirstClass: true,
        seatNumber: 7,
      },
    ],
  },
  {
    id: "3",
    name: "Bike Moderado",
    type: "bike",
    date: "17/04/2025",
    time: "18:00",
    instructor: "Pedro Santos",
    totalSeats: 20,
    students: [
      {
        id: "s6",
        name: "Roberto Silva",
        phone: "(11) 99123-4567",
        credits: { available: 10, used: 10 },
        isFirstClass: false,
        seatNumber: 2,
      },
      {
        id: "s7",
        name: "Fernanda Souza",
        phone: "(11) 98888-7777",
        credits: { available: 7, used: 3 },
        isFirstClass: false,
        seatNumber: 9,
      },
      {
        id: "s8",
        name: "Lucas Mendes",
        phone: "(11) 97777-8888",
        credits: { available: 1, used: 9 },
        isFirstClass: true,
        seatNumber: 15,
      },
      {
        id: "s9",
        name: "Camila Ferreira",
        phone: "(11) 96666-5555",
        credits: { available: 4, used: 6 },
        isFirstClass: false,
        seatNumber: 18,
      },
    ],
  },
  {
    id: "4",
    name: "Ioga Avançado",
    type: "yoga",
    date: "18/04/2025",
    time: "08:00",
    instructor: "Ana Costa",
    totalSeats: 12,
    students: [
      {
        id: "s10",
        name: "Marcelo Dias",
        phone: "(11) 95555-4444",
        credits: { available: 6, used: 14 },
        isFirstClass: false,
        seatNumber: 4,
      },
      {
        id: "s11",
        name: "Patrícia Rocha",
        phone: "(11) 94444-3333",
        credits: { available: 9, used: 11 },
        isFirstClass: false,
        seatNumber: 8,
      },
    ],
  },
  {
    id: "5",
    name: "Bike Avançado",
    type: "bike",
    date: "18/04/2025",
    time: "19:00",
    instructor: "João Silva",
    totalSeats: 20,
    students: [
      {
        id: "s12",
        name: "Gustavo Martins",
        phone: "(11) 93333-2222",
        credits: { available: 12, used: 8 },
        isFirstClass: false,
        seatNumber: 7,
      },
      {
        id: "s13",
        name: "Aline Santos",
        phone: "(11) 92222-1111",
        credits: { available: 3, used: 17 },
        isFirstClass: true,
        seatNumber: 10,
      },
    ],
  },
]

// Funções para acessar os dados
export function getAllClasses(): Promise<Class[]> {
  return Promise.resolve(classes)
}

export function getClassById(id: string): Promise<Class | undefined> {
  const classData = classes.find((c) => c.id === id)
  return Promise.resolve(classData)
}

export function getTodayClasses(): Class[] {
  // Simulando aulas de hoje (17/04/2025)
  return classes.filter((c) => c.date === "17/04/2025")
}

export function getUpcomingClasses(): Class[] {
  // Simulando aulas futuras (18/04/2025 em diante)
  return classes.filter((c) => c.date !== "17/04/2025")
}

export function getClassesByType(type: "bike" | "yoga"): Promise<Class[]> {
  return Promise.resolve(classes.filter((c) => c.type === type))
}
