import Star from "./Star";

export function Stars({ count }: { count: number }) {
  if (count < 1 || count > 5 || typeof count !== "number") {
    return null;
  } else {
    return (
      <ul className="card-body-stars u-clearfix">
        {Array.from({ length: count }, (_, i) => (
          <li key={i}>
            <Star />
          </li>
        ))}
      </ul>
    );
  }
}
