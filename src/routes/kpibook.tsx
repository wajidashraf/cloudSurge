import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/kpibook')({
  beforeLoad: () => {
    // Redirect to external URL
    window.location.href = 'https://www.amazon.co.uk/Key-Person-Influence-Five-Step-Industry/dp/B01BUK3C1W/ref=sr_1_1?crid=12PY90Q3Z3HO&dib=eyJ2IjoiMSJ9.m1Cq_zbTvUrqvQh9ilxZ1N48krws7K7YfA_LINQ50_WNj752n6f_dL2W1mZxmZkOBgfhsIyjcx8gLcz-z6UBopj00WUg-h8teICASrvd5l0RTewSoWKJzx41eRBzbG-FMxl2ATlRbcOKhoEZm_j9MTiLbMwgWsLxBeyxvQXhF0eUJGRuLdsEBBfNEH9SQz6uam4Kq6o3HFIjmAnH4HuA-6gphcuKz3q7I04szXW9xvo.InO3NIQUUCTJDGk3P9yOlvGcx6JUtd26F35XkXir0mk&dib_tag=se&keywords=key%2Bperson%2Bof%2Binfluence&qid=1727859453&sprefix=key%2Bperson%2Bof%2Binfluence%2Caps%2C63&sr=8-1'
    throw redirect({
      to: '/',
    })
  },
})