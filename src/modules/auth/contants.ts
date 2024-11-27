import { CanActivate, SetMetadata, Type } from '@nestjs/common';

export const jwtConstants = {
  secret: 'secretKey',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const MULTIPLE_GUARDS_REFERENCES = 'multipleGuardsReferences';

export const MultipleGuardsReferences = (...guards: Type<CanActivate>[]) =>
  SetMetadata(MULTIPLE_GUARDS_REFERENCES, guards);
