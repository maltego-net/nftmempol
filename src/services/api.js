export async function fetchNftById(id) {
  const res = await fetch(`/api/nft/${id}`)
  if (!res.ok) throw new Error('NFT not found')
  return res.json()
}
