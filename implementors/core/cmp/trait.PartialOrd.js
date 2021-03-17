(function() {var implementors = {};
implementors["backup_cli"] = [{"text":"impl PartialOrd&lt;EpochEndingBackupMeta&gt; for EpochEndingBackupMeta","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StateSnapshotBackupMeta&gt; for StateSnapshotBackupMeta","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TransactionBackupMeta&gt; for TransactionBackupMeta","synthetic":false,"types":[]}];
implementors["boogie_backend"] = [{"text":"impl PartialOrd&lt;ModelValue&gt; for ModelValue","synthetic":false,"types":[]}];
implementors["borrow_graph"] = [{"text":"impl PartialOrd&lt;RefID&gt; for RefID","synthetic":false,"types":[]}];
implementors["bytecode"] = [{"text":"impl PartialOrd&lt;AbsStructType&gt; for AbsStructType","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Addr&gt; for Addr","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;GlobalKey&gt; for GlobalKey","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Root&gt; for Root","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Offset&gt; for Offset","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AccessPath&gt; for AccessPath","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;PartialOrd + FootprintDomain&gt; PartialOrd&lt;TrieNode&lt;T&gt;&gt; for TrieNode&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;PartialOrd + FootprintDomain&gt; PartialOrd&lt;AccessPathTrie&lt;T&gt;&gt; for AccessPathTrie&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;EdgeDomain&gt; for EdgeDomain","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BorrowInfo&gt; for BorrowInfo","synthetic":false,"types":[]},{"text":"impl&lt;Elem:&nbsp;PartialOrd + Clone + Ord + Sized&gt; PartialOrd&lt;SetDomain&lt;Elem&gt;&gt; for SetDomain&lt;Elem&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;PartialOrd + Ord, V:&nbsp;PartialOrd + AbstractDomain&gt; PartialOrd&lt;MapDomain&lt;K, V&gt;&gt; for MapDomain&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;State:&nbsp;PartialOrd + Clone&gt; PartialOrd&lt;BlockState&lt;State&gt;&gt; for BlockState&lt;State&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FunctionVariant&gt; for FunctionVariant","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Def&gt; for Def","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Label&gt; for Label","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AttrId&gt; for AttrId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SpecBlockId&gt; for SpecBlockId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AssignKind&gt; for AssignKind","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Constant&gt; for Constant","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BorrowNode&gt; for BorrowNode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StrongEdge&gt; for StrongEdge","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PropKind&gt; for PropKind","synthetic":false,"types":[]}];
implementors["compiled_stdlib"] = [{"text":"impl PartialOrd&lt;ScriptCall&gt; for ScriptCall","synthetic":false,"types":[]}];
implementors["diem_client"] = [{"text":"impl PartialOrd&lt;State&gt; for State","synthetic":false,"types":[]}];
implementors["diem_config"] = [{"text":"impl PartialOrd&lt;PeerRole&gt; for PeerRole","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;NetworkId&gt; for NetworkId","synthetic":false,"types":[]}];
implementors["diem_crypto"] = [{"text":"impl PartialOrd&lt;HashValue&gt; for HashValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PublicKey&gt; for PublicKey","synthetic":false,"types":[]}];
implementors["diem_jellyfish_merkle"] = [{"text":"impl PartialOrd&lt;NodeKey&gt; for NodeKey","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StaleNodeIndex&gt; for StaleNodeIndex","synthetic":false,"types":[]}];
implementors["diem_json_rpc_client"] = [{"text":"impl PartialOrd&lt;State&gt; for State","synthetic":false,"types":[]}];
implementors["diem_logger"] = [{"text":"impl PartialOrd&lt;LevelFilter&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Key&gt; for Key","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]}];
implementors["diem_nibble"] = [{"text":"impl PartialOrd&lt;Nibble&gt; for Nibble","synthetic":false,"types":[]}];
implementors["diem_transaction_builder"] = [{"text":"impl PartialOrd&lt;ScriptCall&gt; for ScriptCall","synthetic":false,"types":[]}];
implementors["diem_types"] = [{"text":"impl PartialOrd&lt;AccessPath&gt; for AccessPath","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Path&gt; for Path","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;EventKey&gt; for EventKey","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;MempoolStatus&gt; for MempoolStatus","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;MempoolStatusCode&gt; for MempoolStatusCode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;DiemVersion&gt; for DiemVersion","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AuthenticationKey&gt; for AuthenticationKey","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;GovernanceRole&gt; for GovernanceRole","synthetic":false,"types":[]}];
implementors["functional_tests"] = [{"text":"impl PartialOrd&lt;Stage&gt; for Stage","synthetic":false,"types":[]}];
implementors["ir_to_bytecode"] = [{"text":"impl PartialOrd&lt;InternalCompilerError&gt; for InternalCompilerError","synthetic":false,"types":[]}];
implementors["ir_to_bytecode_syntax"] = [{"text":"impl&lt;L:&nbsp;PartialOrd, E:&nbsp;PartialOrd&gt; PartialOrd&lt;ParseError&lt;L, E&gt;&gt; for ParseError&lt;L, E&gt;","synthetic":false,"types":[]}];
implementors["move_core_types"] = [{"text":"impl PartialOrd&lt;AccountAddress&gt; for AccountAddress","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Identifier&gt; for Identifier","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;IdentStr&gt; for IdentStr","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TypeTag&gt; for TypeTag","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructTag&gt; for StructTag","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ResourceKey&gt; for ResourceKey","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleId&gt; for ModuleId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;VMStatus&gt; for VMStatus","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;KeptVMStatus&gt; for KeptVMStatus","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AbortLocation&gt; for AbortLocation","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StatusCode&gt; for StatusCode","synthetic":false,"types":[]}];
implementors["move_coverage"] = [{"text":"impl PartialOrd&lt;AbstractSegment&gt; for AbstractSegment","synthetic":false,"types":[]}];
implementors["move_ir_types"] = [{"text":"impl PartialOrd&lt;ModuleName&gt; for ModuleName","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;QualifiedModuleIdent&gt; for QualifiedModuleIdent","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleIdent&gt; for ModuleIdent","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Var_&gt; for Var_","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ability&gt; for Ability","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;QualifiedStructIdent&gt; for QualifiedStructIdent","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Field_&gt; for Field_","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructName&gt; for StructName","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ConstantName&gt; for ConstantName","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FunctionName&gt; for FunctionName","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BlockLabel&gt; for BlockLabel","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;NopLabel&gt; for NopLabel","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Loc&gt; for Loc","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;PartialOrd&gt; PartialOrd&lt;Spanned&lt;T&gt;&gt; for Spanned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["move_lang"] = [{"text":"impl PartialOrd&lt;SpecId&gt; for SpecId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AbilitySet&gt; for AbilitySet","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TypeName_&gt; for TypeName_","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BaseType_&gt; for BaseType_","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Label&gt; for Label","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BuiltinTypeName_&gt; for BuiltinTypeName_","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TypeName_&gt; for TypeName_","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TParamID&gt; for TParamID","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TParam&gt; for TParam","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TVar&gt; for TVar","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleName&gt; for ModuleName","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Field&gt; for Field","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructName&gt; for StructName","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FunctionName&gt; for FunctionName","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ConstantName&gt; for ConstantName","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ability_&gt; for Ability_","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Var&gt; for Var","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleIdent&gt; for ModuleIdent","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;TName, V:&nbsp;PartialOrd&gt; PartialOrd&lt;UniqueMap&lt;K, V&gt;&gt; for UniqueMap&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;TName&gt; PartialOrd&lt;UniqueSet&lt;T&gt;&gt; for UniqueSet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Address&gt; for Address","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Pass&gt; for Pass","synthetic":false,"types":[]}];
implementors["move_model"] = [{"text":"impl PartialOrd&lt;SpecBlockTarget&gt; for SpecBlockTarget","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleName&gt; for ModuleName","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;QualifiedSymbol&gt; for QualifiedSymbol","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Loc&gt; for Loc","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleId&gt; for ModuleId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;NamedConstantId&gt; for NamedConstantId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructId&gt; for StructId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FieldId&gt; for FieldId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FunId&gt; for FunId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SchemaId&gt; for SchemaId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SpecFunId&gt; for SpecFunId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SpecVarId&gt; for SpecVarId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;NodeId&gt; for NodeId","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;GlobalId&gt; for GlobalId","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;PartialOrd&gt; PartialOrd&lt;QualifiedId&lt;Id&gt;&gt; for QualifiedId&lt;Id&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TypeParameter&gt; for TypeParameter","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;TypeConstraint&gt; for TypeConstraint","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Symbol&gt; for Symbol","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Type&gt; for Type","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PrimitiveType&gt; for PrimitiveType","synthetic":false,"types":[]}];
implementors["move_vm_types"] = [{"text":"impl PartialOrd&lt;NativeCostIndex&gt; for NativeCostIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructType&gt; for StructType","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Type&gt; for Type","synthetic":false,"types":[]}];
implementors["network"] = [{"text":"impl PartialOrd&lt;DiscoverySource&gt; for DiscoverySource","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;MessagingProtocolVersion&gt; for MessagingProtocolVersion","synthetic":false,"types":[]}];
implementors["short_hex_str"] = [{"text":"impl PartialOrd&lt;ShortHexStr&gt; for ShortHexStr","synthetic":false,"types":[]}];
implementors["vm"] = [{"text":"impl PartialOrd&lt;Location&gt; for Location","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;VMError&gt; for VMError","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleHandleIndex&gt; for ModuleHandleIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructHandleIndex&gt; for StructHandleIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FunctionHandleIndex&gt; for FunctionHandleIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FieldHandleIndex&gt; for FieldHandleIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructDefInstantiationIndex&gt; for StructDefInstantiationIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FunctionInstantiationIndex&gt; for FunctionInstantiationIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FieldInstantiationIndex&gt; for FieldInstantiationIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;IdentifierIndex&gt; for IdentifierIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AddressIdentifierIndex&gt; for AddressIdentifierIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ConstantPoolIndex&gt; for ConstantPoolIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SignatureIndex&gt; for SignatureIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructDefinitionIndex&gt; for StructDefinitionIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FunctionDefinitionIndex&gt; for FunctionDefinitionIndex","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ModuleHandle&gt; for ModuleHandle","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StructHandle&gt; for StructHandle","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ability&gt; for Ability","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;AbilitySet&gt; for AbilitySet","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SignatureToken&gt; for SignatureToken","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Type&gt; for Type","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;FunctionSignature&gt; for FunctionSignature","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;IndexKind&gt; for IndexKind","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SignatureTokenKind&gt; for SignatureTokenKind","synthetic":false,"types":[]}];
implementors["x_core"] = [{"text":"impl&lt;T:&nbsp;PartialOrd&gt; PartialOrd&lt;DebugIgnore&lt;T&gt;&gt; for DebugIgnore&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()