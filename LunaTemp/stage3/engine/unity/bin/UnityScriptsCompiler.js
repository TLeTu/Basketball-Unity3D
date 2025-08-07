if ( TRACE ) { TRACE( JSON.parse( '["AudioController#Awake","AudioController#OnCollisionEnter","BackBtn#init","BackBtn#Update","BallCarousel#init","BallCarousel#Awake","BallCarousel#Start","BallCarousel#Update","BallCarousel#GetBallFacingCamera","BallCarousel#GetCurrentBallMaterial","BallController#init","BallController#Awake","BallController#Update","BallController#FixedUpdate","BallController#HandlePointerDown","BallController#HandlePointerDrag","BallController#HandlePointerUp","BallController#GetMousePos","BallController#ChangeBallMaterial","BallController#ApplyRollingEffect","BallSelectionBtn#Start","BallSelectionBtn#OnBallSelectionButtonClicked","BallSelectionBtn#OnCloseButtonClicked","BallSelectionBtn#OnBallSelected","GameManager#init","GameManager#Awake","GameManager#Start","GameManager#Update","GameManager#OnHoopEntered","GameManager#OnHoopExited","GameManager#OnRimTouched","GameManager#AddScore","GameManager#ChangeAllBallsMaterial","HoopTrigger#OnTriggerEnter","HoopTrigger#OnTriggerExit","LaunchController#init","LaunchController#LaunchBall$1","LaunchController#LaunchBall","LaunchController#CalculateVelocity","RimCollider#OnCollisionEnter","RotateRing#init","RotateRing#Update","ScoreManager#Awake","ScoreManager#AddScore","ScoreUI#Awake","ScoreUI#UpdateScoreDisplay","ScoreUI#UpdatePerfectScoreDisplay","SpriteRender#init","SpriteRender#Start","SpriteRender#Update"]' ) ); }
/**
 * @version 1.0.9350.21812
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AudioController start.*/
    Bridge.define("AudioController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            collisionSound: null,
            _audioSource: null
        },
        methods: {
            /*AudioController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AudioController#Awake", this ); }

                this._audioSource = this.GetComponent(UnityEngine.AudioSource);
                if (UnityEngine.Component.op_Equality(this._audioSource, null)) {
                    this._audioSource = this.gameObject.AddComponent(UnityEngine.AudioSource);
                }
            },
            /*AudioController.Awake end.*/

            /*AudioController.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "AudioController#OnCollisionEnter", this ); }

                // Play collision sound if assigned
                if (this.collisionSound != null && UnityEngine.Component.op_Inequality(this._audioSource, null)) {
                    var volume = Math.max(0, Math.min(1, collision.relativeVelocity.length() / 10.0)); // Adjust volume based on collision speed
                    this._audioSource.PlayOneShot$1(this.collisionSound, volume);
                }
            },
            /*AudioController.OnCollisionEnter end.*/


        }
    });
    /*AudioController end.*/

    /*BackBtn start.*/
    Bridge.define("BackBtn", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animationSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BackBtn#init", this ); }

                this._animationSpeed = 1.0;
            }
        },
        methods: {
            /*BackBtn.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BackBtn#Update", this ); }

                // Move the tranform back and forth from -100 to -115 on the X-axis
                var newX = UnityEngine.Mathf.PingPong(UnityEngine.Time.time * this._animationSpeed, 15.0) - 100.0;
                this.transform.localPosition = new pc.Vec3( newX, this.transform.localPosition.y, this.transform.localPosition.z );
            },
            /*BackBtn.Update end.*/


        }
    });
    /*BackBtn end.*/

    /*BallCarousel start.*/
    Bridge.define("BallCarousel", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            isDragging: false,
            lastMouseX: 0,
            rotationSpeed: 0,
            balls: null,
            currentBall: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallCarousel#init", this ); }

                this.isDragging = false;
                this.rotationSpeed = 5.0;
            }
        },
        methods: {
            /*BallCarousel.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BallCarousel#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(BallCarousel.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(BallCarousel.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                BallCarousel.Instance = this;
                // Removed DontDestroyOnLoad since this is not a root GameObject
                // The singleton will work within the current scene
            },
            /*BallCarousel.Awake end.*/

            /*BallCarousel.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BallCarousel#Start", this ); }

                if (this.balls == null || this.balls.length === 0) {
                    UnityEngine.Debug.LogError$2("BallCarousel: No balls assigned in the inspector.");
                    return;
                }

                // Initialize the carousel with the first ball facing the camera
                this.currentBall = this.GetBallFacingCamera();
                if (UnityEngine.GameObject.op_Inequality(this.currentBall, null)) {
                    var arrowChild = this.currentBall.transform.Find("Arrow");
                    if (UnityEngine.Component.op_Inequality(arrowChild, null)) {
                        // Enable the entire Arrow child GameObject
                        arrowChild.gameObject.SetActive(true);
                    }
                }
            },
            /*BallCarousel.Start end.*/

            /*BallCarousel.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BallCarousel#Update", this ); }

                // Mouse input
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.isDragging = true;
                    this.lastMouseX = UnityEngine.Input.mousePosition.x;
                }
                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    // Disable the arrow for the current ball
                    if (UnityEngine.GameObject.op_Inequality(this.currentBall, null)) {
                        var arrowChild = this.currentBall.transform.Find("Arrow");
                        if (UnityEngine.Component.op_Inequality(arrowChild, null)) {
                            UnityEngine.Debug.Log$1("Disabling Arrow for: " + (this.currentBall.GetComponent(BallSelection).ballName || ""));
                            // Disable the entire Arrow child GameObject
                            arrowChild.gameObject.SetActive(false);
                        }
                    }
                    // Get the ball that is currently facing the camera
                    this.isDragging = false;
                    this.currentBall = this.GetBallFacingCamera();
                    if (UnityEngine.GameObject.op_Inequality(this.currentBall, null)) {
                        // Enable the arrow for the current ball
                        var arrowChild1 = this.currentBall.transform.Find("Arrow");
                        if (UnityEngine.Component.op_Inequality(arrowChild1, null)) {
                            UnityEngine.Debug.Log$1("Enabling Arrow for: " + (this.currentBall.GetComponent(BallSelection).ballName || ""));
                            // Enable the entire Arrow child GameObject
                            arrowChild1.gameObject.SetActive(true);
                        }
                        // Log the name of the current ball
                        UnityEngine.Debug.Log$1("Current Ball: " + (this.currentBall.GetComponent(BallSelection).ballName || ""));
                        // Do something with the current ball
                    }
                }
                if (this.isDragging) {
                    var mouseX = UnityEngine.Input.mousePosition.x;
                    var deltaX = mouseX - this.lastMouseX;
                    // Rotate in the opposite direction of drag
                    this.transform.Rotate(0, -deltaX * this.rotationSpeed * UnityEngine.Time.deltaTime, 0);
                    this.lastMouseX = mouseX;
                }
            },
            /*BallCarousel.Update end.*/

            /*BallCarousel.GetBallFacingCamera start.*/
            GetBallFacingCamera: function () {
if ( TRACE ) { TRACE( "BallCarousel#GetBallFacingCamera", this ); }

                var $t;
                var cam = UnityEngine.Camera.main;
                if (UnityEngine.Component.op_Equality(cam, null) || this.balls == null || this.balls.length === 0) {
                    return null;
                }

                var carouselPosition = this.transform.position.$clone();
                var cameraForward = cam.transform.forward.$clone();
                cameraForward.y = 0; // Project onto XZ plane
                cameraForward.normalize();

                // float maxDot = float.NegativeInfinity;
                var minDot = Number.POSITIVE_INFINITY;
                var facingBall = null;

                $t = Bridge.getEnumerator(this.balls);
                try {
                    while ($t.moveNext()) {
                        var ball = $t.Current;
                        if (UnityEngine.GameObject.op_Equality(ball, null)) {
                            continue;
                        }
                        var toBall = (ball.transform.position.$clone().sub( carouselPosition )).clone().normalize().$clone();
                        toBall.y = 0; // Project onto XZ plane
                        var dot = cameraForward.dot( toBall );
                        if (dot < minDot) {
                            minDot = dot;
                            facingBall = ball;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return facingBall;
            },
            /*BallCarousel.GetBallFacingCamera end.*/

            /*BallCarousel.GetCurrentBallMaterial start.*/
            GetCurrentBallMaterial: function () {
if ( TRACE ) { TRACE( "BallCarousel#GetCurrentBallMaterial", this ); }

                if (UnityEngine.GameObject.op_Equality(this.currentBall, null)) {
                    UnityEngine.Debug.LogWarning$1("BallCarousel: No current ball selected.");
                    return null;
                }

                // Find the child object named "mesh"
                var meshTransform = this.currentBall.transform.Find("mesh");

                if (UnityEngine.Component.op_Inequality(meshTransform, null)) {
                    // Get the Renderer component from the mesh child
                    var meshRenderer = meshTransform.GetComponent(UnityEngine.Renderer);

                    if (UnityEngine.Component.op_Inequality(meshRenderer, null)) {
                        // Return the material
                        return meshRenderer.material;
                    } else {
                        UnityEngine.Debug.LogWarning$1("BallCarousel: No Renderer component found on mesh child object of " + (this.currentBall.name || ""));
                        return null;
                    }
                } else {
                    UnityEngine.Debug.LogWarning$1("BallCarousel: mesh child object not found on " + (this.currentBall.name || "") + ". Make sure the child object is named 'mesh'.");
                    return null;
                }
            },
            /*BallCarousel.GetCurrentBallMaterial end.*/


        }
    });
    /*BallCarousel end.*/

    /*BallController start.*/
    Bridge.define("BallController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _currentlyDraggingBall: null
            }
        },
        fields: {
            _mainCamera: null,
            _launchControl: null,
            _rb: null,
            _isDragging: false,
            _mousePosition: null,
            _targetPosition: null,
            _dragStartPos: null,
            _dragEndPos: null,
            _dragStartTime: 0,
            _dragEndTime: 0,
            dragSpeed: 0,
            swipeThreshold: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallController#init", this ); }

                this._mousePosition = new UnityEngine.Vector3();
                this._targetPosition = new UnityEngine.Vector3();
                this._dragStartPos = new UnityEngine.Vector3();
                this._dragEndPos = new UnityEngine.Vector3();
                this._isDragging = false;
                this.dragSpeed = 10.0;
                this.swipeThreshold = 1000.0;
            }
        },
        methods: {
            /*BallController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BallController#Awake", this ); }

                // Cache references
                this._rb = this.GetComponent(UnityEngine.Rigidbody);
                this._mainCamera = UnityEngine.Camera.main;
                this._launchControl = UnityEngine.Object.FindObjectOfType(LaunchController);
            },
            /*BallController.Awake end.*/

            /*BallController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BallController#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    // Raycast to see if this ball is under the mouse
                    var ray = this._mainCamera.ScreenPointToRay(UnityEngine.Input.mousePosition);
                    var hit = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Raycast$1(ray, hit)) {
                        var ball = hit.v.collider.GetComponent(BallController);
                        if (UnityEngine.MonoBehaviour.op_Equality(ball, this)) {
                            BallController._currentlyDraggingBall = this;
                            this.HandlePointerDown(UnityEngine.Input.mousePosition);
                        }
                    }
                } else if (UnityEngine.Input.GetMouseButton(0)) {
                    if (UnityEngine.MonoBehaviour.op_Equality(BallController._currentlyDraggingBall, this)) {
                        this.HandlePointerDrag(UnityEngine.Input.mousePosition);
                    }
                } else if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    if (UnityEngine.MonoBehaviour.op_Equality(BallController._currentlyDraggingBall, this)) {
                        this.HandlePointerUp(UnityEngine.Input.mousePosition);
                        BallController._currentlyDraggingBall = null;
                    }
                }
            },
            /*BallController.Update end.*/

            /*BallController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "BallController#FixedUpdate", this ); }

                if (this._isDragging) {
                    // Lerp towards the target position while dragging
                    var desiredPosition = new pc.Vec3().lerp( this.transform.position, this._targetPosition, this.dragSpeed * UnityEngine.Time.fixedDeltaTime );

                    // Prevent tunneling using raycast
                    var currentPosition = this.transform.position.$clone();
                    var direction = desiredPosition.$clone().sub( currentPosition );
                    var ray = new UnityEngine.Ray.$ctor1(currentPosition, direction);
                    var hit = { v : new UnityEngine.RaycastHit() };

                    if (!UnityEngine.Physics.Raycast$1(ray, hit, direction.length())) {
                        this._rb.MovePosition(desiredPosition);
                    } else {
                        this._rb.MovePosition(hit.v.point);
                    }
                } else {
                    // Apply rolling effect when not dragging
                    this.ApplyRollingEffect(this._rb.velocity);
                }
            },
            /*BallController.FixedUpdate end.*/

            /*BallController.HandlePointerDown start.*/
            HandlePointerDown: function (pointerPosition) {
if ( TRACE ) { TRACE( "BallController#HandlePointerDown", this ); }

                this._rb.useGravity = false;
                this._mousePosition = pointerPosition.$clone().sub( this.GetMousePos() );
                this._dragStartPos = pointerPosition.$clone();
                this._dragStartTime = UnityEngine.Time.time;
            },
            /*BallController.HandlePointerDown end.*/

            /*BallController.HandlePointerDrag start.*/
            HandlePointerDrag: function (pointerPosition) {
if ( TRACE ) { TRACE( "BallController#HandlePointerDrag", this ); }

                this._isDragging = true;
                this._targetPosition = this._mainCamera.ScreenToWorldPoint(pointerPosition.$clone().sub( this._mousePosition ));
            },
            /*BallController.HandlePointerDrag end.*/

            /*BallController.HandlePointerUp start.*/
            HandlePointerUp: function (pointerPosition) {
if ( TRACE ) { TRACE( "BallController#HandlePointerUp", this ); }

                this._isDragging = false;
                this._rb.useGravity = true;
                this._dragEndPos = pointerPosition.$clone();
                this._dragEndTime = UnityEngine.Time.time;

                // Calculate swipe vector and speed
                var swipeVector = this._dragEndPos.$clone().sub( this._dragStartPos );
                var swipeDuration = this._dragEndTime - this._dragStartTime;
                var swipeSpeed = swipeVector.length() / swipeDuration;

                UnityEngine.Debug.Log$1(System.String.format("Swipe Speed: {0}", [Bridge.box(swipeSpeed, System.Single, System.Single.format, System.Single.getHashCode)]));

                if (swipeSpeed > this.swipeThreshold) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this._launchControl, null)) {
                        this._launchControl.LaunchBall$1(this.gameObject, swipeVector.clone().normalize().$clone().clone().scale( swipeSpeed ));
                    } else {
                        UnityEngine.Debug.LogWarning$1("LaunchControl not found in the scene.");
                    }
                } else {
                    UnityEngine.Debug.Log$1("Swipe too slow \u2014 ball dropped without launch.");
                    // Let the ball drop naturally
                }
            },
            /*BallController.HandlePointerUp end.*/

            /*BallController.GetMousePos start.*/
            GetMousePos: function () {
if ( TRACE ) { TRACE( "BallController#GetMousePos", this ); }

                return this._mainCamera.WorldToScreenPoint(this.transform.position);
            },
            /*BallController.GetMousePos end.*/

            /*BallController.ChangeBallMaterial start.*/
            ChangeBallMaterial: function (newMaterial) {
if ( TRACE ) { TRACE( "BallController#ChangeBallMaterial", this ); }

                var ballMeshTransform = this.transform.Find("ballMesh");

                if (UnityEngine.Component.op_Inequality(ballMeshTransform, null)) {
                    var ballRenderer = ballMeshTransform.GetComponent(UnityEngine.Renderer);
                    if (UnityEngine.Component.op_Inequality(ballRenderer, null)) {
                        ballRenderer.material = newMaterial;
                    } else {
                        UnityEngine.Debug.LogWarning$1("No Renderer component found on ballMesh child object.");
                    }
                } else {
                    UnityEngine.Debug.LogWarning$1("ballMesh child object not found. Make sure the child object is named 'ballMesh'.");
                }
            },
            /*BallController.ChangeBallMaterial end.*/

            /*BallController.ApplyRollingEffect start.*/
            ApplyRollingEffect: function (velocity) {
if ( TRACE ) { TRACE( "BallController#ApplyRollingEffect", this ); }

                if (velocity.lengthSq() < 0.001) {
                    return;
                }

                var radius = this.transform.localScale.x * 0.5;
                var rotationAxis = new pc.Vec3().cross( pc.Vec3.UP.clone(), velocity.clone().normalize() );
                var angularDistance = velocity.length() * UnityEngine.Time.fixedDeltaTime / radius;
                var deltaRotation = new pc.Quat().setFromAxisAngle( rotationAxis, UnityEngine.Mathf.Rad2Deg * angularDistance );
                this.transform.rotation = deltaRotation.clone().mul( this.transform.rotation );
            },
            /*BallController.ApplyRollingEffect end.*/


        }
    });
    /*BallController end.*/

    /*BallSelection start.*/
    Bridge.define("BallSelection", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ballName: null
        }
    });
    /*BallSelection end.*/

    /*BallSelectionBtn start.*/
    Bridge.define("BallSelectionBtn", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _ballSelectionCanvas: null,
            _inGameCanvas: null,
            _ballCarousel: null
        },
        methods: {
            /*BallSelectionBtn.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BallSelectionBtn#Start", this ); }

                if (UnityEngine.GameObject.op_Equality(this._ballSelectionCanvas, null) || UnityEngine.GameObject.op_Equality(this._inGameCanvas, null)) {
                    UnityEngine.Debug.LogError$2("BallSelectionBtn: Canvas references are not set.");
                    return;
                }

                this._ballSelectionCanvas.SetActive(false);
                this._ballCarousel.SetActive(false);
            },
            /*BallSelectionBtn.Start end.*/

            /*BallSelectionBtn.OnBallSelectionButtonClicked start.*/
            OnBallSelectionButtonClicked: function () {
if ( TRACE ) { TRACE( "BallSelectionBtn#OnBallSelectionButtonClicked", this ); }

                // Toggle the visibility of the ball selection canvas
                var isActive = this._ballSelectionCanvas.activeSelf;
                this._ballSelectionCanvas.SetActive(!isActive);
                this._inGameCanvas.SetActive(isActive); // Hide in-game canvas when ball selection is active
                this._ballCarousel.SetActive(!isActive);
            },
            /*BallSelectionBtn.OnBallSelectionButtonClicked end.*/

            /*BallSelectionBtn.OnCloseButtonClicked start.*/
            OnCloseButtonClicked: function () {
if ( TRACE ) { TRACE( "BallSelectionBtn#OnCloseButtonClicked", this ); }

                // Hide the ball selection canvas and show the in-game canvas
                this._ballSelectionCanvas.SetActive(false);
                this._inGameCanvas.SetActive(true);
                this._ballCarousel.SetActive(false);
            },
            /*BallSelectionBtn.OnCloseButtonClicked end.*/

            /*BallSelectionBtn.OnBallSelected start.*/
            OnBallSelected: function () {
if ( TRACE ) { TRACE( "BallSelectionBtn#OnBallSelected", this ); }

                // Get the current ball's material from the carousel
                if (UnityEngine.MonoBehaviour.op_Inequality(BallCarousel.Instance, null)) {
                    var currentBallMaterial = BallCarousel.Instance.GetCurrentBallMaterial();

                    if (currentBallMaterial != null && UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null)) {
                        // Change all balls' material to match the selected ball
                        GameManager.Instance.ChangeAllBallsMaterial(currentBallMaterial);
                        UnityEngine.Debug.Log$1("Changed all balls material to: " + (currentBallMaterial.name || ""));
                    } else {
                        UnityEngine.Debug.LogWarning$1("BallSelectionBtn: Could not get current ball material or GameManager instance is null.");
                    }
                } else {
                    UnityEngine.Debug.LogWarning$1("BallSelectionBtn: BallCarousel instance is null.");
                }

                this._ballSelectionCanvas.SetActive(false);
                this._inGameCanvas.SetActive(true);
                this._ballCarousel.SetActive(false);
            },
            /*BallSelectionBtn.OnBallSelected end.*/


        }
    });
    /*BallSelectionBtn end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            _touchedRim: false,
            _readyForGoal: false,
            _perfectTimer: 0,
            _perfectThreshold: 0,
            _balls: null,
            perfectParticleSystem: null,
            passSound: null,
            backgroundMusic: null,
            perfectSound: null,
            _audioSource: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this._touchedRim = false;
                this._readyForGoal = false;
                this._perfectTimer = 0.0;
                this._perfectThreshold = 100.0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                GameManager.Instance = this;
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                this._audioSource = this.GetComponent(UnityEngine.AudioSource);
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }


                if (this.backgroundMusic != null && UnityEngine.Component.op_Inequality(this._audioSource, null)) {
                    this._audioSource.clip = this.backgroundMusic;
                    this._audioSource.loop = true;
                    this._audioSource.Play();
                }
            },
            /*GameManager.Start end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                if (this._readyForGoal) {
                    this._perfectTimer += UnityEngine.Time.deltaTime;
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.OnHoopEntered start.*/
            OnHoopEntered: function (hoopType) {
if ( TRACE ) { TRACE( "GameManager#OnHoopEntered", this ); }

                if (hoopType === HoopTrigger.HoopType.Lower) {
                    if (this._readyForGoal) {
                        // Play pass sound if assigned
                        if (this.passSound != null && UnityEngine.Component.op_Inequality(this._audioSource, null)) {
                            this._audioSource.PlayOneShot$1(this.passSound, 2.0); // Play with a higher volume of 0.5f
                        }
                        if (this._perfectTimer <= this._perfectThreshold && !this._touchedRim) {
                            if (this.perfectSound != null && UnityEngine.Component.op_Inequality(this._audioSource, null)) {
                                this._audioSource.PlayOneShot$1(this.perfectSound, 2.0); // Play with a higher volume of 1f
                            }
                            // Play perfect particle effect if assigned
                            if (UnityEngine.Component.op_Inequality(this.perfectParticleSystem, null)) {
                                this.perfectParticleSystem.Play();
                            }
                            // Perfect score!
                            if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null)) {
                                ScoreManager.Instance.AddScore(2, true); // Perfect shot
                                UnityEngine.Debug.Log$1("Perfect score!");
                                this._touchedRim = false; // Reset rim touch state
                            }
                        } else {
                            // Normal score
                            if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null)) {
                                UnityEngine.Debug.Log$1("Normal score!");
                                ScoreManager.Instance.AddScore(1, false); // Normal shot
                                this._touchedRim = false; // Reset rim touch state
                            }
                        }
                        this._readyForGoal = false;
                        this._perfectTimer = 0.0;
                    }
                }
            },
            /*GameManager.OnHoopEntered end.*/

            /*GameManager.OnHoopExited start.*/
            OnHoopExited: function (hoopType) {
if ( TRACE ) { TRACE( "GameManager#OnHoopExited", this ); }

                if (hoopType === HoopTrigger.HoopType.Higher) {
                    this._readyForGoal = true; // Ball exited higher, now ready for lower
                    this._perfectTimer = 0.0; // Start timing for perfect score
                }
            },
            /*GameManager.OnHoopExited end.*/

            /*GameManager.OnRimTouched start.*/
            OnRimTouched: function () {
if ( TRACE ) { TRACE( "GameManager#OnRimTouched", this ); }

                this._touchedRim = true;
            },
            /*GameManager.OnRimTouched end.*/

            /*GameManager.AddScore start.*/
            AddScore: function (points, perfect) {
if ( TRACE ) { TRACE( "GameManager#AddScore", this ); }

                // Reset the score or perform any necessary allocation logic
                if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null)) {
                    ScoreManager.Instance.AddScore(points, perfect);
                }
            },
            /*GameManager.AddScore end.*/

            /*GameManager.ChangeAllBallsMaterial start.*/
            ChangeAllBallsMaterial: function (newMaterial) {
if ( TRACE ) { TRACE( "GameManager#ChangeAllBallsMaterial", this ); }

                var $t;
                if (this._balls == null || this._balls.length === 0) {
                    UnityEngine.Debug.LogWarning$1("GameManager: No balls assigned in the _balls array.");
                    return;
                }

                if (newMaterial == null) {
                    UnityEngine.Debug.LogWarning$1("GameManager: Material parameter is null.");
                    return;
                }

                $t = Bridge.getEnumerator(this._balls);
                try {
                    while ($t.moveNext()) {
                        var ball = $t.Current;
                        if (UnityEngine.GameObject.op_Equality(ball, null)) {
                            UnityEngine.Debug.LogWarning$1("GameManager: Found null ball in _balls array.");
                            continue;
                        }

                        var ballController = ball.GetComponent(BallController);
                        if (UnityEngine.MonoBehaviour.op_Inequality(ballController, null)) {
                            ballController.ChangeBallMaterial(newMaterial);
                        } else {
                            UnityEngine.Debug.LogWarning$1(System.String.format("GameManager: No BallController component found on {0}.", [ball.name]));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.ChangeAllBallsMaterial end.*/


        }
    });
    /*GameManager end.*/

    /*HoopTrigger start.*/
    Bridge.define("HoopTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hoopType: 0
        },
        methods: {
            /*HoopTrigger.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "HoopTrigger#OnTriggerEnter", this ); }

                if (other.CompareTag("ballTag")) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null)) {
                        GameManager.Instance.OnHoopEntered(this.hoopType);
                    }
                }
            },
            /*HoopTrigger.OnTriggerEnter end.*/

            /*HoopTrigger.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "HoopTrigger#OnTriggerExit", this ); }

                if (other.CompareTag("ballTag")) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null)) {
                        GameManager.Instance.OnHoopExited(this.hoopType);
                    }
                }
            },
            /*HoopTrigger.OnTriggerExit end.*/


        }
    });
    /*HoopTrigger end.*/

    /*HoopTrigger+HoopType start.*/
    Bridge.define("HoopTrigger.HoopType", {
        $kind: 1006,
        statics: {
            fields: {
                Higher: 0,
                Lower: 1
            }
        }
    });
    /*HoopTrigger+HoopType end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LaunchController start.*/
    Bridge.define("LaunchController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            landingTarget: null,
            yMax: 0,
            g: 0,
            y_0: 0,
            x: 0,
            z: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LaunchController#init", this ); }

                this.g = 20.0;
            }
        },
        methods: {
            /*LaunchController.LaunchBall$1 start.*/
            /**
             * Launches the ball toward the landing target using kinematic equations.
             *
             * @instance
             * @public
             * @this LaunchController
             * @memberof LaunchController
             * @param   {UnityEngine.GameObject}    launchObject      The ball GameObject to launch.
             * @param   {UnityEngine.Vector3}       swipeDirection    The swipe direction vector from player input.
             * @return  {void}
             */
            LaunchBall$1: function (launchObject, swipeDirection) {
if ( TRACE ) { TRACE( "LaunchController#LaunchBall$1", this ); }

                UnityEngine.Debug.Log$1("Launching ball with LaunchControl");
                // Calculate relative positions
                this.y_0 = launchObject.transform.position.y - this.landingTarget.transform.position.y;

                // Use swipe direction for X calculation instead of targeting landing object's X
                // Normalize swipe and scale it based on distance to target for reasonable trajectory
                var baseDistance = pc.Vec3.distance( new pc.Vec3( launchObject.transform.position.x, 0, launchObject.transform.position.z ), new pc.Vec3( this.landingTarget.transform.position.x, 0, this.landingTarget.transform.position.z ) );

                // Scale the X direction based on swipe direction (normalized) and base distance
                this.x = swipeDirection.clone().normalize().x * baseDistance;
                this.z = this.landingTarget.transform.position.z - launchObject.transform.position.z;

                // Launch using rigidbody velocity
                var thisBody = launchObject.GetComponent(UnityEngine.Rigidbody);
                thisBody.velocity = this.CalculateVelocity();
            },
            /*LaunchController.LaunchBall$1 end.*/

            /*LaunchController.LaunchBall start.*/
            /**
             * Launches the ball toward the landing target using kinematic equations (legacy method).
             *
             * @instance
             * @public
             * @this LaunchController
             * @memberof LaunchController
             * @param   {UnityEngine.GameObject}    launchObject    The ball GameObject to launch.
             * @return  {void}
             */
            LaunchBall: function (launchObject) {
if ( TRACE ) { TRACE( "LaunchController#LaunchBall", this ); }

                // Default behavior - launch straight toward target
                this.LaunchBall$1(launchObject, pc.Vec3.UP.clone());
            },
            /*LaunchController.LaunchBall end.*/

            /*LaunchController.CalculateVelocity start.*/
            /**
             * Calculates the velocity vector needed to reach the landing target.
             *
             * @instance
             * @private
             * @this LaunchController
             * @memberof LaunchController
             * @return  {UnityEngine.Vector3}        Velocity vector for the launch.
             */
            CalculateVelocity: function () {
if ( TRACE ) { TRACE( "LaunchController#CalculateVelocity", this ); }

                // Distance X and Z to target location
                var displacementXZ = new pc.Vec3( this.x, 0, this.z );

                // Kinematic analysis for arc
                var velocityY = pc.Vec3.UP.clone().clone().scale( Math.sqrt(2 * this.g * (this.yMax - this.y_0)) );
                var velocityXZ = displacementXZ.$clone().scale( 1.0 / ( (Math.sqrt(2 * (this.yMax - this.y_0) / this.g) + Math.sqrt(2 * this.yMax / this.g)) ) );

                var velocity = velocityXZ.$clone().add( velocityY );
                return velocity.$clone();
            },
            /*LaunchController.CalculateVelocity end.*/


        },
        overloads: {
            "LaunchBall(GameObject, Vector3)": "LaunchBall$1"
        }
    });
    /*LaunchController end.*/

    /*RimCollider start.*/
    Bridge.define("RimCollider", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*RimCollider.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "RimCollider#OnCollisionEnter", this ); }

                if (collision.gameObject.CompareTag("ballTag")) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null)) {
                        UnityEngine.Debug.Log$1("Rim touched by ball");
                        GameManager.Instance.OnRimTouched();
                    }
                }
            },
            /*RimCollider.OnCollisionEnter end.*/


        }
    });
    /*RimCollider end.*/

    /*RotateRing start.*/
    Bridge.define("RotateRing", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rotationSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RotateRing#init", this ); }

                this.rotationSpeed = 5.0;
            }
        },
        methods: {
            /*RotateRing.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RotateRing#Update", this ); }

                // Slowly rotate the ring around its Z-axis
                this.transform.Rotate(0, 0, -this.rotationSpeed * UnityEngine.Time.deltaTime);
            },
            /*RotateRing.Update end.*/


        }
    });
    /*RotateRing end.*/

    /*ScoreManager start.*/
    Bridge.define("ScoreManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            onScoreChanged: null,
            onPerfectScore: null,
            score: 0
        },
        methods: {
            /*ScoreManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ScoreManager#Awake", this ); }

                this.score = 0;
                if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                ScoreManager.Instance = this;
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*ScoreManager.Awake end.*/

            /*ScoreManager.AddScore start.*/
            AddScore: function (points, perfect) {
if ( TRACE ) { TRACE( "ScoreManager#AddScore", this ); }

                if (perfect === void 0) { perfect = false; }

                this.score = (this.score + points) | 0;
                UnityEngine.Debug.Log$1("Score updated: " + this.score);
                this.onScoreChanged.Invoke();
                if (perfect) {
                    this.onPerfectScore.Invoke();
                    UnityEngine.Debug.Log$1("Perfect score achieved!");
                }
            },
            /*ScoreManager.AddScore end.*/


        }
    });
    /*ScoreManager end.*/

    /*ScoreUI start.*/
    Bridge.define("ScoreUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _scoreText: null,
            _perfectScoreText: null
        },
        methods: {
            /*ScoreUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ScoreUI#Awake", this ); }

                this._scoreText = this.GetComponent(TMPro.TextMeshProUGUI);
                if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null)) {
                    ScoreManager.Instance.onScoreChanged.AddListener(Bridge.fn.cacheBind(this, this.UpdateScoreDisplay));
                    ScoreManager.Instance.onPerfectScore.AddListener(Bridge.fn.cacheBind(this, this.UpdatePerfectScoreDisplay));
                }
            },
            /*ScoreUI.Awake end.*/

            /*ScoreUI.UpdateScoreDisplay start.*/
            UpdateScoreDisplay: function () {
if ( TRACE ) { TRACE( "ScoreUI#UpdateScoreDisplay", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null)) {
                    this._scoreText.text = Bridge.toString(ScoreManager.Instance.score);
                    this._perfectScoreText.text = ""; // Clear perfect score text
                }
            },
            /*ScoreUI.UpdateScoreDisplay end.*/

            /*ScoreUI.UpdatePerfectScoreDisplay start.*/
            UpdatePerfectScoreDisplay: function () {
if ( TRACE ) { TRACE( "ScoreUI#UpdatePerfectScoreDisplay", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null)) {
                    this._perfectScoreText.text = "PERFECT!";
                }
            },
            /*ScoreUI.UpdatePerfectScoreDisplay end.*/


        }
    });
    /*ScoreUI end.*/

    /*SpriteRender start.*/
    Bridge.define("SpriteRender", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _camera: null,
            lockYAxis: false,
            reverseDirection: false,
            enableYAnimation: false,
            _animationSpeed: 0,
            _animationRange: 0,
            _baseYPosition: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SpriteRender#init", this ); }

                this.lockYAxis = false;
                this.reverseDirection = false;
                this.enableYAnimation = true;
                this._animationSpeed = 1.0;
                this._animationRange = 2.0;
                this._baseYPosition = 0.0;
            }
        },
        methods: {
            /*SpriteRender.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SpriteRender#Start", this ); }

                // If no camera is assigned, use the main camera
                if (UnityEngine.Component.op_Equality(this._camera, null)) {
                    this._camera = UnityEngine.Camera.main;

                    // If still no camera found, find any camera in the scene
                    if (UnityEngine.Component.op_Equality(this._camera, null)) {
                        this._camera = UnityEngine.Object.FindObjectOfType(UnityEngine.Camera);
                    }
                }

                // Store the initial Y position as the base position
                this._baseYPosition = this.transform.localPosition.y;
                // Disable the sprite renderer by default
                this.gameObject.SetActive(false); // Start with the sprite disabled
            },
            /*SpriteRender.Start end.*/

            /*SpriteRender.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SpriteRender#Update", this ); }

                // Handle Y-axis animation (up and down movement)
                if (this.enableYAnimation) {
                    // Move the sprite up and down using PingPong
                    var newY = UnityEngine.Mathf.PingPong(UnityEngine.Time.time * this._animationSpeed, this._animationRange) + (this._baseYPosition - this._animationRange / 2.0);
                    this.transform.localPosition = new pc.Vec3( this.transform.localPosition.x, newY, this.transform.localPosition.z );
                }

                // Make sure we have a camera reference
                if (UnityEngine.Component.op_Equality(this._camera, null)) {
                    return;
                }

                // Calculate the direction from sprite to camera
                var directionToCamera = this._camera.transform.position.$clone().sub( this.transform.position );

                // If reverse direction is enabled, flip the direction
                if (this.reverseDirection) {
                    directionToCamera = directionToCamera.$clone().scale( -1 );
                }

                // If lock Y axis is enabled, keep the sprite upright
                if (this.lockYAxis) {
                    directionToCamera.y = 0;
                }

                // Only rotate if we have a valid direction
                if (!pc.Vec3.equals( directionToCamera, pc.Vec3.ZERO.clone() )) {
                    // Create rotation that looks at the camera
                    var targetRotation = new pc.Quat().lookRotation( directionToCamera, pc.Vec3.UP );

                    // Apply the rotation to make the sprite face the camera
                    this.transform.rotation = targetRotation.$clone();
                }
            },
            /*SpriteRender.Update end.*/


        }
    });
    /*SpriteRender end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.Events","TMPro"];

    /*AudioController start.*/
    $m("AudioController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"_audioSource","t":4,"rt":$n[1].AudioSource,"sn":"_audioSource"},{"a":2,"n":"collisionSound","t":4,"rt":$n[1].AudioClip,"sn":"collisionSound"}]}; }, $n);
    /*AudioController end.*/

    /*BackBtn start.*/
    $m("BackBtn", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animationSpeed","t":4,"rt":$n[0].Single,"sn":"_animationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BackBtn end.*/

    /*BallCarousel start.*/
    $m("BallCarousel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetBallFacingCamera","t":8,"sn":"GetBallFacingCamera","rt":$n[1].GameObject},{"a":2,"n":"GetCurrentBallMaterial","t":8,"sn":"GetCurrentBallMaterial","rt":$n[1].Material},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":BallCarousel,"g":{"a":2,"n":"get_Instance","t":8,"rt":BallCarousel,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[BallCarousel],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"balls","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"balls"},{"a":1,"n":"currentBall","t":4,"rt":$n[1].GameObject,"sn":"currentBall"},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastMouseX","t":4,"rt":$n[0].Single,"sn":"lastMouseX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":BallCarousel,"sn":"Instance"}]}; }, $n);
    /*BallCarousel end.*/

    /*BallController start.*/
    $m("BallController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Rigidbody)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyRollingEffect","t":8,"pi":[{"n":"velocity","pt":$n[1].Vector3,"ps":0}],"sn":"ApplyRollingEffect","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ChangeBallMaterial","t":8,"pi":[{"n":"newMaterial","pt":$n[1].Material,"ps":0}],"sn":"ChangeBallMaterial","rt":$n[0].Void,"p":[$n[1].Material]},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"GetMousePos","t":8,"sn":"GetMousePos","rt":$n[1].Vector3},{"a":1,"n":"HandlePointerDown","t":8,"pi":[{"n":"pointerPosition","pt":$n[1].Vector3,"ps":0}],"sn":"HandlePointerDown","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"HandlePointerDrag","t":8,"pi":[{"n":"pointerPosition","pt":$n[1].Vector3,"ps":0}],"sn":"HandlePointerDrag","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"HandlePointerUp","t":8,"pi":[{"n":"pointerPosition","pt":$n[1].Vector3,"ps":0}],"sn":"HandlePointerUp","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_currentlyDraggingBall","is":true,"t":4,"rt":BallController,"sn":"_currentlyDraggingBall"},{"a":1,"n":"_dragEndPos","t":4,"rt":$n[1].Vector3,"sn":"_dragEndPos"},{"a":1,"n":"_dragEndTime","t":4,"rt":$n[0].Single,"sn":"_dragEndTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_dragStartPos","t":4,"rt":$n[1].Vector3,"sn":"_dragStartPos"},{"a":1,"n":"_dragStartTime","t":4,"rt":$n[0].Single,"sn":"_dragStartTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_isDragging","t":4,"rt":$n[0].Boolean,"sn":"_isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_launchControl","t":4,"rt":LaunchController,"sn":"_launchControl"},{"a":1,"n":"_mainCamera","t":4,"rt":$n[1].Camera,"sn":"_mainCamera"},{"a":1,"n":"_mousePosition","t":4,"rt":$n[1].Vector3,"sn":"_mousePosition"},{"a":1,"n":"_rb","t":4,"rt":$n[1].Rigidbody,"sn":"_rb"},{"a":1,"n":"_targetPosition","t":4,"rt":$n[1].Vector3,"sn":"_targetPosition"},{"a":2,"n":"dragSpeed","t":4,"rt":$n[0].Single,"sn":"dragSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"swipeThreshold","t":4,"rt":$n[0].Single,"sn":"swipeThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BallController end.*/

    /*BallSelection start.*/
    $m("BallSelection", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"ballName","t":4,"rt":$n[0].String,"sn":"ballName"}]}; }, $n);
    /*BallSelection end.*/

    /*BallSelectionBtn start.*/
    $m("BallSelectionBtn", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnBallSelected","t":8,"sn":"OnBallSelected","rt":$n[0].Void},{"a":2,"n":"OnBallSelectionButtonClicked","t":8,"sn":"OnBallSelectionButtonClicked","rt":$n[0].Void},{"a":2,"n":"OnCloseButtonClicked","t":8,"sn":"OnCloseButtonClicked","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballCarousel","t":4,"rt":$n[1].GameObject,"sn":"_ballCarousel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ballSelectionCanvas","t":4,"rt":$n[1].GameObject,"sn":"_ballSelectionCanvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inGameCanvas","t":4,"rt":$n[1].GameObject,"sn":"_inGameCanvas"}]}; }, $n);
    /*BallSelectionBtn end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddScore","t":8,"pi":[{"n":"points","pt":$n[0].Int32,"ps":0},{"n":"perfect","pt":$n[0].Boolean,"ps":1}],"sn":"AddScore","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ChangeAllBallsMaterial","t":8,"pi":[{"n":"newMaterial","pt":$n[1].Material,"ps":0}],"sn":"ChangeAllBallsMaterial","rt":$n[0].Void,"p":[$n[1].Material]},{"a":2,"n":"OnHoopEntered","t":8,"pi":[{"n":"hoopType","pt":HoopTrigger.HoopType,"ps":0}],"sn":"OnHoopEntered","rt":$n[0].Void,"p":[HoopTrigger.HoopType]},{"a":2,"n":"OnHoopExited","t":8,"pi":[{"n":"hoopType","pt":HoopTrigger.HoopType,"ps":0}],"sn":"OnHoopExited","rt":$n[0].Void,"p":[HoopTrigger.HoopType]},{"a":2,"n":"OnRimTouched","t":8,"sn":"OnRimTouched","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_audioSource","t":4,"rt":$n[1].AudioSource,"sn":"_audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_balls","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"_balls"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_perfectThreshold","t":4,"rt":$n[0].Single,"sn":"_perfectThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_perfectTimer","t":4,"rt":$n[0].Single,"sn":"_perfectTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_readyForGoal","t":4,"rt":$n[0].Boolean,"sn":"_readyForGoal","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_touchedRim","t":4,"rt":$n[0].Boolean,"sn":"_touchedRim","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"backgroundMusic","t":4,"rt":$n[1].AudioClip,"sn":"backgroundMusic"},{"a":2,"n":"passSound","t":4,"rt":$n[1].AudioClip,"sn":"passSound"},{"a":2,"n":"perfectParticleSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"perfectParticleSystem"},{"a":2,"n":"perfectSound","t":4,"rt":$n[1].AudioClip,"sn":"perfectSound"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameManager,"sn":"Instance"}]}; }, $n);
    /*GameManager end.*/

    /*HoopTrigger start.*/
    $m("HoopTrigger", function () { return {"nested":[HoopTrigger.HoopType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"hoopType","t":4,"rt":HoopTrigger.HoopType,"sn":"hoopType","box":function ($v) { return Bridge.box($v, HoopTrigger.HoopType, System.Enum.toStringFn(HoopTrigger.HoopType));}}]}; }, $n);
    /*HoopTrigger end.*/

    /*HoopTrigger+HoopType start.*/
    $m("HoopTrigger.HoopType", function () { return {"td":HoopTrigger,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Higher","is":true,"t":4,"rt":HoopTrigger.HoopType,"sn":"Higher","box":function ($v) { return Bridge.box($v, HoopTrigger.HoopType, System.Enum.toStringFn(HoopTrigger.HoopType));}},{"a":2,"n":"Lower","is":true,"t":4,"rt":HoopTrigger.HoopType,"sn":"Lower","box":function ($v) { return Bridge.box($v, HoopTrigger.HoopType, System.Enum.toStringFn(HoopTrigger.HoopType));}}]}; }, $n);
    /*HoopTrigger+HoopType end.*/

    /*LaunchController start.*/
    $m("LaunchController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CalculateVelocity","t":8,"sn":"CalculateVelocity","rt":$n[1].Vector3},{"a":2,"n":"LaunchBall","t":8,"pi":[{"n":"launchObject","pt":$n[1].GameObject,"ps":0}],"sn":"LaunchBall","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"LaunchBall","t":8,"pi":[{"n":"launchObject","pt":$n[1].GameObject,"ps":0},{"n":"swipeDirection","pt":$n[1].Vector3,"ps":1}],"sn":"LaunchBall$1","rt":$n[0].Void,"p":[$n[1].GameObject,$n[1].Vector3]},{"a":2,"n":"g","t":4,"rt":$n[0].Single,"sn":"g","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"landingTarget","t":4,"rt":$n[1].GameObject,"sn":"landingTarget"},{"a":1,"n":"x","t":4,"rt":$n[0].Single,"sn":"x","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"yMax","t":4,"rt":$n[0].Single,"sn":"yMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"y_0","t":4,"rt":$n[0].Single,"sn":"y_0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"z","t":4,"rt":$n[0].Single,"sn":"z","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LaunchController end.*/

    /*RimCollider start.*/
    $m("RimCollider", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]}]}; }, $n);
    /*RimCollider end.*/

    /*RotateRing start.*/
    $m("RotateRing", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RotateRing end.*/

    /*ScoreManager start.*/
    $m("ScoreManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddScore","t":8,"pi":[{"n":"points","pt":$n[0].Int32,"ps":0},{"n":"perfect","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"AddScore","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":ScoreManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":ScoreManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[ScoreManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"score","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_score","t":8,"rt":$n[0].Int32,"fg":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_score","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"score"},"fn":"score"},{"a":2,"n":"onPerfectScore","t":4,"rt":$n[2].UnityEvent,"sn":"onPerfectScore"},{"a":2,"n":"onScoreChanged","t":4,"rt":$n[2].UnityEvent,"sn":"onScoreChanged"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":ScoreManager,"sn":"Instance"},{"a":1,"backing":true,"n":"<score>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*ScoreManager end.*/

    /*ScoreUI start.*/
    $m("ScoreUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"UpdatePerfectScoreDisplay","t":8,"sn":"UpdatePerfectScoreDisplay","rt":$n[0].Void},{"a":2,"n":"UpdateScoreDisplay","t":8,"sn":"UpdateScoreDisplay","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_perfectScoreText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"_perfectScoreText"},{"a":1,"n":"_scoreText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"_scoreText"}]}; }, $n);
    /*ScoreUI end.*/

    /*SpriteRender start.*/
    $m("SpriteRender", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animationRange","t":4,"rt":$n[0].Single,"sn":"_animationRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animationSpeed","t":4,"rt":$n[0].Single,"sn":"_animationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_baseYPosition","t":4,"rt":$n[0].Single,"sn":"_baseYPosition","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_camera","t":4,"rt":$n[1].Camera,"sn":"_camera"},{"at":[new UnityEngine.HeaderAttribute("Animation Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"enableYAnimation","t":4,"rt":$n[0].Boolean,"sn":"enableYAnimation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Billboard Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lockYAxis","t":4,"rt":$n[0].Boolean,"sn":"lockYAxis","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"reverseDirection","t":4,"rt":$n[0].Boolean,"sn":"reverseDirection","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SpriteRender end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
