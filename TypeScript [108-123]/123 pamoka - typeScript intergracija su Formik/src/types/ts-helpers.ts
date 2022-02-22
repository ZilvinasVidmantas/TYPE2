
export type PropTypeNames<Base, PropTypes> = {
  [Key in keyof Base]: Base[Key] extends PropTypes ? Key : never
};

export type SubTypeProps<Base, PropTypes> = PropTypeNames<Base, PropTypes>[keyof Base];

export type SubType<Base, PropTypes> = Pick<Base, SubTypeProps<Base, PropTypes>>;
