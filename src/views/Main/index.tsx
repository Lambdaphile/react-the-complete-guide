import { Card } from '@components'

export default function Main({ onClick }: { onClick: any }) {
  function handleClick(viewName: string) {
    onClick(viewName)
  }

  return (
    <div>
      <Card onClick={() => handleClick('UserForm')}>User From App</Card>
      <Card onClick={() => handleClick('FoodOrder')}>Food Order App</Card>
      <Card onClick={() => handleClick('AdvancedFoodOrder')}>
        Advanced Food Order App
      </Card>
    </div>
  )
}
