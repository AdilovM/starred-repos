// ------------------------------------------------------------------------------
// <auto-generated>
// This code was generated by the @augloop/code-gen tool.
// Source: https://dev.azure.com/office/ISS/_git/augloop-server?path=%2Fmodules%2Ftypes-core%2Fsrc%2Fannotations.ts
// Changes to this file may cause incorrect behavior and will be lost upon regeneration.
// </auto-generated>
// ------------------------------------------------------------------------------

import { AnnotationMetaData, IAnnotation, IBinaryClassificationAnnotation } from '../annotations';
import { SchemaObjectHeader } from '../schema-object';
import { SchemaObject } from './schema-object.g';

export class Annotation implements IAnnotation {
    public id?: string;
    public ownerId?: string;
    public invalidationHash?: string;
    public M_?: AnnotationMetaData;
    public readonly H_: SchemaObjectHeader;
    public constructor(obj?: IAnnotation) {
        SchemaObject.assign(Annotation, this, obj);
    }
    public static getTypeName(): string {
        return 'AugLoop_Core_Annotation';
    }
    public static getBaseTypes(): string[] {
        return [];
    }
    public static readonly H_ = { T_: Annotation.getTypeName(), B_: Annotation.getBaseTypes() };
}

export class BinaryClassificationAnnotation implements IBinaryClassificationAnnotation {
    public readonly name: string;
    public readonly value: boolean;
    public id?: string;
    public ownerId?: string;
    public invalidationHash?: string;
    public M_?: AnnotationMetaData;
    public readonly H_: SchemaObjectHeader;
    public constructor(obj?: IBinaryClassificationAnnotation) {
        SchemaObject.assign(BinaryClassificationAnnotation, this, obj);
    }
    public static getTypeName(): string {
        return 'AugLoop_Core_BinaryClassificationAnnotation';
    }
    public static getBaseTypes(): string[] {
        return ['AugLoop_Core_Annotation'];
    }
    public static readonly H_ = { T_: BinaryClassificationAnnotation.getTypeName(), B_: BinaryClassificationAnnotation.getBaseTypes() };
}

