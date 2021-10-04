import { deserialize, NodeItem, serialize } from ".";

it("should serialize", () => {
  const node = new NodeItem(
    "root",
    new NodeItem("left", new NodeItem("left.left")),
    new NodeItem("right")
  );

  const serializedNode = serialize(node);
  expect(serializedNode).toBe(
    '{"val":"root","left":{"val":"left","left":{"val":"left.left"}},"right":{"val":"right"}}'
  );
});

it("should deserialize", () => {
  const node =
    '{"val":"root","left":{"val":"left","left":{"val":"left.left"}},"right":{"val":"right"}}';

  const deserializedNode = deserialize(node);

  expect(deserializedNode);
});
