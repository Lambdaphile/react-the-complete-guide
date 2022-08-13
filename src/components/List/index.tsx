import ListItem from './ListItem';

function List({ children }: { children: JSX.Element[] }) {
  return <ul className="rounded-md border border-slate-200">{children}</ul>;
}

List.Item = ListItem;

export default List;
