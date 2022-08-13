// import { useUniqueId } from '@hooks'
// import cx from 'classnames'

// export default function Switch({
//   checked,
//   onChange
// }: {
//   checked: boolean
//   onChange: any
// }) {
//   function handleChange(event: any) {
//     const {
//       currentTarget: { checked }
//     } = event

//     onChange(checked)
//   }

//   function getStyle(name: string) {
//     const { [name]: style } = this.props

//     if (checked && name === 'color' && style) {
//       return { backgroundColor: style }
//     }

//     if (name === 'size' && style) {
//       return { fontSize: style }
//     }
//   }

//   return (
//     <div
//       style={getStyle('size')}
//       className={cx(styles.toggleSwitch, { [styles.checked]: checked })}
//     >
//       <label
//         style={getStyle('color')}
//         className={styles.track}
//         htmlFor={useUniqueId('switch')}
//       >
//         <input
//           checked={checked}
//           className={styles.input}
//           id={useUniqueId('switch')}
//           type="checkbox"
//           onChange={handleChange}
//         />
//         <span className={styles.thumb} />
//       </label>
//     </div>
//   )
// }

export {};
