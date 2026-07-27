export default function JsonLd({
  data,
  id,
}: {
  data: Record<string, unknown> | object
  id?: string
}) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
