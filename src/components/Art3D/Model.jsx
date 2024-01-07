import { useAnimations, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect } from 'react'

var lastAnimation = undefined

export default function Model({body, animation, mat}) {

	const { scene, nodes, materials, animations } = useGLTF('./Fox/glTF/Fox.gltf')
	const modelAnimations = useAnimations(animations, scene)

    if (lastAnimation == undefined) {
        modelAnimations.actions[animation].reset().fadeIn(0.5).play()
    }
    else if (lastAnimation != animation) {
        modelAnimations.actions[lastAnimation].fadeOut(0.5)
        modelAnimations.actions[animation].reset().fadeIn(0.5).play()
    }

    lastAnimation = animation

	if (mat == "bones") {
		var sktHelper = new THREE.SkeletonHelper(nodes.fox.skeleton.bones[0])
		sktHelper.skeleton = nodes.fox.skeleton
		sktHelper.visible = true

		return (

			<group name="root" ref={body} scale={0.038} position={[0, -2, 0]}>
				<primitive object={nodes._rootJoint}/>
				<skinnedMesh castShadow receiveShadow
					geometry={nodes.fox.geometry} 
					material={materials.fox_material}
                    skeleton={nodes.fox.skeleton}/>
			</group>
		)
	}

	if (mat == "wireframe") {
		return (
			<group name="root" ref={body}  scale={0.038} position={[0, -2, 0]}>
				<primitive object={nodes._rootJoint}/>
				<skinnedMesh castShadow receiveShadow
					geometry={nodes.fox.geometry} 
					material={materials.fox_material} 
					skeleton={nodes.fox.skeleton}/>
				<skinnedMesh castShadow receiveShadow
					geometry={nodes.fox.geometry} 
					material={new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000})} 
					skeleton={nodes.fox.skeleton}/>
			</group>
		)
	}

	return (
		<group name="root" ref={body}  scale={0.038} position={[0, -2, 0]}>
			<primitive object={nodes._rootJoint}/>
			<skinnedMesh castShadow receiveShadow
				geometry={nodes.fox.geometry} 
				material={materials.fox_material} 
				skeleton={nodes.fox.skeleton}/>
		</group>
	)
}

useGLTF.preload('./Fox/glTF/Fox.gltf' )