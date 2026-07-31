import type { Relationship, RelationshipType } from '../../types/legend';
export const byRelationshipType = (items: Relationship[], type: RelationshipType) => items.filter((item) => item.role === type);
export const strongestRelationships = (items: Relationship[]) => [...items].sort((a,b) => b.weight - a.weight);
