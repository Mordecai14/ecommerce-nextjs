
import { NextPage } from 'next'
import { Typography } from '@mui/material'

import { ShopLayout } from '@/components/layouts'



const HomePage: NextPage = () => {
  return (
    <ShopLayout title={'Next Shop | Home'} pageDescription={'Mi tienda hecha con Next.JS'}>
      <Typography variant='h1' component='h1'>
        Tienda
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
    </ShopLayout>
  )
}

export default HomePage
